// Simula jogadores para conferir o ritmo. Uso: node sim.js
const E = require('./engine.js');
const { CFG } = E;

function rngFactory(seed) {
  return function () { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

function nextTile(s) {
  const n = CFG.gridSize;
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (E.canBuyLand(s, r, c)) return [r, c];
  return null;
}

// politica: 'equilibrado' compra o que for mais barato; 'bichinhos' prioriza ritual; 'terras' prioriza terra
function play(policy, seed, maxSec) {
  const rng = rngFactory(seed), s = E.newState();
  const marks = {}; const mark = (k, t) => { if (!(k in marks)) marks[k] = t; };
  let t = 0;
  while (t <= maxSec) {
    let wait = 1;
    let acted = true;
    while (acted) {
      acted = false;
      const rc = E.ritualCost(s), lc = E.landCost(s), tile = nextTile(s);
      const wantRitual = policy === 'bichinhos' ? true : policy === 'terras' ? (!tile || s.creatures.length < 2) : rc <= lc || !tile;
      if (wantRitual && s.essence >= rc) { E.doRitual(s, rng); acted = true; }
      else if (tile && s.essence >= lc) { E.buyLand(s, tile[0], tile[1], rng); acted = true; }
    }
    {
      // pula direto ate o proximo momento em que dá para comprar o que a politica quer
      const rc = E.ritualCost(s), lc = E.landCost(s), tile = nextTile(s);
      const wantRitual = policy === 'bichinhos' ? true : policy === 'terras' ? (!tile || s.creatures.length < 2) : rc <= lc || !tile;
      const cost = wantRitual ? rc : lc;
      const rate = Math.max(E.totalRate(s), 0.0001);
      wait = Math.min(900, Math.max(1, Math.ceil((cost - s.essence) / rate)));
    }
    E.tick(s, wait);
    t += wait;
    const lands = E.landCount(s) - 1, cr = s.creatures.length;
    if (cr >= 3) mark('3 bichinhos', t);
    if (cr >= 8) mark('8 bichinhos', t);
    if (cr >= 20) mark('20 bichinhos', t);
    if (lands >= 2) mark('2 terras', t);
    if (lands >= 6) mark('6 terras', t);
    if (lands >= 15) mark('15 terras', t);
    if (lands >= 24) mark('mapa cheio', t);
    if (Object.values(s.lands).includes('eter')) mark('1a Fonte de Eter', t);
    if (s.creatures.some(c => c.shiny)) mark('1o Brilhante', t);
    if (s.goals.length >= 10) mark('10 metas', t);
  }
  return { marks, s };
}

const med = arr => { const a = arr.filter(x => x != null).sort((x, y) => x - y); return a.length ? a[a.length >> 1] : null; };
const fmt = x => x == null ? 'nunca' : (x < 120 ? x + 's' : x < 7200 ? (x / 60).toFixed(1) + ' min' : (x / 3600).toFixed(1) + ' h');

const policies = ['equilibrado', 'bichinhos', 'terras'];
const keys = ['3 bichinhos', '2 terras', '8 bichinhos', '6 terras', '15 terras', '20 bichinhos', '10 metas', 'mapa cheio', '1a Fonte de Eter', '1o Brilhante'];
for (const pol of policies) {
  const runs = [];
  for (let seed = 1; seed <= 200; seed++) runs.push(play(pol, seed, 6 * 3600));
  console.log('\n== Politica: ' + pol + ' (mediana de 200 jogadores, ate 6 h) ==');
  for (const k of keys) {
    const got = runs.map(r => r.marks[k]);
    const pct = (100 * got.filter(x => x != null).length / got.length).toFixed(0);
    console.log(k.padEnd(18), fmt(med(got)).padEnd(10), '(' + pct + '% chegam)');
  }
  const r = runs[0].s;
  console.log('fim (seed 1): ' + r.creatures.length + ' bichinhos, ' + (E.landCount(r) - 1) + ' terras, ' + E.totalRate(r).toFixed(1) + ' essencia/s');
}
