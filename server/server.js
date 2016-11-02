'use strict'
const mw = require('./config/middleware.js');
require('./db/index.js');
const app = mw.express();


var handleErrors = //middleware and routes
app.use(
  require('morgan')('dev'),
  mw.bodyParser.json(),
  mw.bodyParser.urlencoded({extended: true}),
  require('./resources/router.js')
);
app.use(function(err, res, req, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', {error:err});
})

module.exports = app;
