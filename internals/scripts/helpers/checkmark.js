const chalk = require('chalk');

/**
 * Adds mark check symbol
 */
function addCheckMark(callback) {
  // check 成功提示
  process.stdout.write(chalk.green(' ✓'));
  if (callback) callback();
}

module.exports = addCheckMark;
