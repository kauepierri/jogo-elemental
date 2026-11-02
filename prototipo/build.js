const fs = require('fs');
const dir = __dirname;
const engine = fs.readFileSync(dir + '/engine.js', 'utf8');
const tpl = fs.readFileSync(dir + '/template.html', 'utf8');
fs.writeFileSync(dir + '/index.html', tpl.replace('/*ENGINE*/', () => engine));
console.log('ok');
