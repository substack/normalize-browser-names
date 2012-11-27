var normalize = require('../');

console.dir(normalize(['ie8','ff/12.']));
console.dir(normalize({'ie':8,'ff':[12,'5.']}));
