'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const appointments = require('./routes/appointments');
const scheduler = require('./src/scheduler');
const cfg = require('./src/config');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');

app.use('/appointments', appointments);
app.use('/', appointments);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err,
  });
});

if ((process.env.NODE_ENV || '').toLowerCase() !== 'test' && !!process.env.CI)
  scheduler.start();

app.listen(cfg.port, function() { 
  console.log(`Starting sample-appointment-reminders at http://localhost:${cfg.port}`);
});

module.exports = app;
