'use strict'
const mw = require('../config/middleware.js');
const uri = mw.urls.database;
const chalk = mw.chalk;

module.exports = mw.mongoose.connect(uri, {
  db: {native_parser: true},
  server: {
    poolSize: 5,
    reconnectTries: Number.MAX_VALUE,
    socketOptions: {
      keepAlive: 1000,
      connectTimeoutMS: 30000
    }
  }
}).connection
  .on('error', err => console.log(err))
  .on('open', () => {
    console.log(
      '  ' + chalk.green.bold(String.fromCharCode(0x27A0)) + ' ' +
      chalk.cyan('Connected to ' + uri),
      '\n    ' + chalk.magenta.underline.dim('Loading Default Data...')
    );
    let conflictCount = 0, errMsg = [], doneCount = 0;
    require('../data/default.json') //TEST USER PASSWORDS ARE ALL 'testpassword'
      .forEach((record, index, arr) => new require('../resources/schema.js')(record)
        .save(err => {
          if (err) {
            err.message.match(/^E11000/i) ? conflictCount++ : errMsg.push(err.message);
          }
          doneCount++;
          doneCount == arr.length && console.log(
            `    ${chalk.cyan.dim('Load Complete.')} ${chalk.yellow.dim(`${(
                  conflictCount ?
                    `(${conflictCount} conflicts`
                    : '')}${
                   (errMsg.length > 0 ?
                    `${(conflictCount ? '; ' : '(') + errMsg.length} errors: ${errMsg})`
                    : conflictCount ? ')' : '')
                  }`)
                }\n`
          );
      }));
  });


try {
  mongoose.connect("mongodb://" + db_address);
  db = mongoose.connection;
  console.log("Started connection on " + "mongodb://" + uri + ", waiting for it to open...".grey);
} catch (err) {
  console.log("Setting up failed to connect to " + uri, err.message);
}
