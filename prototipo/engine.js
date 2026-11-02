// ===== MOTOR DO JOGO (sem nada de tela). Todos os números ficam em CFG. =====
const CFG = {
  startEssence: 25,
  baseRate: 0.25,            // Essência por segundo, por bichinho
  ritualBase: 25,
  ritualGrowth: 1.12,
  ritualDiscountPerSabio: 0.04,
  ritualDiscountCap: 0.4,
  landBase: 30,
  landGrowth: 1.32,
  gridSize: 5,
  offlineCapSec: 8 * 3600,
  shinyChance: 0.01,
  rareLandBase: 0.03,
  rareLandPerSortudo: 0.01,
  rareLandCap: 0.12,
  speciesBonusPerLand: 0.15, // +15% para a espécie, por terra do bioma dela
  etherBonusPerLand: 0.2,    // +20% para todos, por Fonte de Éter
  shinyMult: 2,
  mineradorMult: 1.4,
};

const SPECIES = {
  sol:    { name: 'Sol',    img: 'img/sol.png',    biome: 'campo' },
  lua:    { name: 'Lua',    img: 'img/lua.png',    biome: 'lago' },
  sombra: { name: 'Sombra', img: 'img/sombra.png', biome: 'bosque' },
};
const SPECIES_KEYS = Object.keys(SPECIES);

const TRAITS = {
  minerador: { name: 'Minerador', desc: '+40% de produção', w: 40 },
  sortudo:   { name: 'Sortudo',   desc: '+1% de chance de terreno raro', w: 30 },
  sabio:     { name: 'Sábio',     desc: '-4% no custo do ritual', w: 30 },
};

const BIOMES = {
  planicie: { name: 'Planície',       w: 34, note: 'Sem bônus, mas é terra de graça para crescer' },
  campo:    { name: 'Campo Dourado',  w: 22, note: '+15% de produção para cada Sol' },
  lago:     { name: 'Lago Lunar',     w: 22, note: '+15% de produção para cada Lua' },
  bosque:   { name: 'Bosque Sombrio', w: 22, note: '+15% de produção para cada Sombra' },
  eter:     { name: 'Fonte de Éter',  w: 0,  note: 'Raro: +20% de produção para todos' },
};
const COMMON_BIOMES = ['planicie', 'campo', 'lago', 'bosque'];

const GOALS = [
  { id: 'g1', text: 'Faça seu primeiro ritual', reward: 10, check: s => s.rituals >= 1 },
  { id: 'g2', text: 'Tenha 3 bichinhos', reward: 25, check: s => s.creatures.length >= 3 },
  { id: 'g3', text: 'Compre 2 terras', reward: 40, check: s => landCount(s) - 1 >= 2 },
  { id: 'g4', text: 'Tenha um Sol, uma Lua e uma Sombra', reward: 60, check: s => SPECIES_KEYS.every(k => s.creatures.some(c => c.species === k)) },
  { id: 'g5', text: 'Compre 6 terras', reward: 120, check: s => landCount(s) - 1 >= 6 },
  { id: 'g6', text: 'Tenha 8 bichinhos', reward: 150, check: s => s.creatures.length >= 8 },
  { id: 'g7', text: 'Descubra uma Fonte de Éter', reward: 300, check: s => Object.values(s.lands).includes('eter') },
  { id: 'g8', text: 'Consiga um bichinho Brilhante', reward: 300, check: s => s.creatures.some(c => c.shiny) },
  { id: 'g9', text: 'Compre 15 terras', reward: 800, check: s => landCount(s) - 1 >= 15 },
  { id: 'g10', text: 'Tenha 20 bichinhos', reward: 1000, check: s => s.creatures.length >= 20 },
];

function newState() {
  const mid = Math.floor(CFG.gridSize / 2);
  return {
    v: 1,
    essence: CFG.startEssence,
    creatures: [],
    nextId: 1,
    lands: { [mid + ',' + mid]: 'planicie' },
    rituals: 0,
    goals: [],
    pending: [],        // avisos de metas concluídas, para a tela mostrar
    totalEssence: 0,
    lastSave: Date.now(),
  };
}

function landCount(s) { return Object.keys(s.lands).length; }
function countTrait(s, t) { return s.creatures.reduce((n, c) => n + (c.trait === t ? 1 : 0), 0); }
function countBiome(s, b) { return Object.values(s.lands).reduce((n, x) => n + (x === b ? 1 : 0), 0); }

function speciesMult(s, sp) { return 1 + CFG.speciesBonusPerLand * countBiome(s, SPECIES[sp].biome); }
function globalMult(s) { return 1 + CFG.etherBonusPerLand * countBiome(s, 'eter'); }

function creatureRate(s, c) {
  let r = CFG.baseRate;
  if (c.trait === 'minerador') r *= CFG.mineradorMult;
  if (c.shiny) r *= CFG.shinyMult;
  return r * speciesMult(s, c.species) * globalMult(s);
}
function totalRate(s) { return s.creatures.reduce((sum, c) => sum + creatureRate(s, c), 0); }

function tick(s, dt) {
  const g = totalRate(s) * dt;
  s.essence += g;
  s.totalEssence += g;
  return g;
}

function ritualDiscount(s) { return Math.min(CFG.ritualDiscountCap, countTrait(s, 'sabio') * CFG.ritualDiscountPerSabio); }
function ritualCost(s) { return Math.ceil(CFG.ritualBase * Math.pow(CFG.ritualGrowth, s.rituals) * (1 - ritualDiscount(s))); }
function landCost(s) { return Math.ceil(CFG.landBase * Math.pow(CFG.landGrowth, landCount(s) - 1)); }
function rareLandChance(s) { return Math.min(CFG.rareLandCap, CFG.rareLandBase + CFG.rareLandPerSortudo * countTrait(s, 'sortudo')); }

function pickWeighted(table, keys, rng) {
  const total = keys.reduce((n, k) => n + table[k].w, 0);
  let x = rng() * total;
  for (const k of keys) { x -= table[k].w; if (x < 0) return k; }
  return keys[keys.length - 1];
}

function checkGoals(s) {
  const done = [];
  for (const g of GOALS) {
    if (!s.goals.includes(g.id) && g.check(s)) {
      s.goals.push(g.id);
      s.essence += g.reward;
      s.pending.push(g.id);
      done.push(g);
    }
  }
  return done;
}

function doRitual(s, rng) {
  const cost = ritualCost(s);
  if (s.essence < cost) return null;
  s.essence -= cost;
  s.rituals++;
  const c = {
    id: s.nextId++,
    species: SPECIES_KEYS[Math.floor(rng() * SPECIES_KEYS.length)],
    trait: pickWeighted(TRAITS, Object.keys(TRAITS), rng),
    shiny: rng() < CFG.shinyChance,
  };
  s.creatures.push(c);
  checkGoals(s);
  return c;
}

function canBuyLand(s, r, c) {
  const n = CFG.gridSize;
  if (r < 0 || c < 0 || r >= n || c >= n) return false;
  if (s.lands[r + ',' + c]) return false;
  return [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dr, dc]) => s.lands[(r + dr) + ',' + (c + dc)]);
}

function buyLand(s, r, c, rng) {
  if (!canBuyLand(s, r, c)) return null;
  const cost = landCost(s);
  if (s.essence < cost) return null;
  s.essence -= cost;
  const biome = rng() < rareLandChance(s) ? 'eter' : pickWeighted(BIOMES, COMMON_BIOMES, rng);
  s.lands[r + ',' + c] = biome;
  checkGoals(s);
  return biome;
}

// Aplica o tempo em que o jogador ficou fora. Devolve {secs, gained} ou null.
function applyOffline(s, now) {
  const secs = Math.min((now - s.lastSave) / 1000, CFG.offlineCapSec);
  s.lastSave = now;
  if (!(secs > 10) || s.creatures.length === 0) return null;
  return { secs, gained: tick(s, secs) };
}

if (typeof module !== 'undefined') {
  module.exports = { CFG, SPECIES, TRAITS, BIOMES, GOALS, newState, tick, totalRate, creatureRate,
    ritualCost, landCost, doRitual, buyLand, canBuyLand, rareLandChance, landCount, applyOffline, checkGoals };
}
