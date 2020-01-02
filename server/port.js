const argv = require('./argv');

/* eslint-disable no-console */
console.log('port.argv');
console.log(argv);
console.log(process.env.PORT);
/* eslint-enable */

// 端口
module.exports = parseInt(argv.port || process.env.PORT || '3000', 10);
