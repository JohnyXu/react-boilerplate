/* eslint-disable no-console */
console.log('argv.process.log');
console.log(process.argv);
/* eslint-enable */

module.exports = require('minimist')(process.argv.slice(2));
