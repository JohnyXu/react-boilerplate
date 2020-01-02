const chalk = require('chalk');

/**
 * Adds mark cross symbol 不通过提示
 */
function addXMark(callback) {
  process.stdout.write(chalk.red(' ✘'));
  if (callback) callback();
}

module.exports = addXMark;
