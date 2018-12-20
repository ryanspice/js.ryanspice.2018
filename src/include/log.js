const log = require('loglevel');
const pkg = require('../../package.json');
const prefix = require('loglevel-plugin-prefix');

prefix.reg(log);
log.enableAll();
log.setLevel(pkg.debug_level);

prefix.apply(log, {
  template: '[%t] %l (%n) js.ryanspice.com ::',
  levelFormatter(level) {
    return level.toUpperCase();
  },
  nameFormatter(name) {
    return name || 'global';
  },
  timestampFormatter(date) {
    return date.toISOString();
  },
});

export default log;
