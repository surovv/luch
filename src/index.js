const luch = require('./lib/luch');
const luchFor = require('./lib/luch-for');
const utilsFns = require('./lib/utils');


module.exports = {
  ...utilsFns,
  luchFor: luchFor.default,
  luch: luch.default,
};
