const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const appConfig = require('./config/appConfig');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const recordsRouter = require('./routes/records');

const ValidationError = require('./error/ValidationError')

var app = express();

// mongo connection set up
appConfig.mongooseConnection();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// routing for record endpoint
app.use('/record', recordsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Handles Validation errors
app.use(function handleErrors(err, req, res, next) {
  if (err instanceof ValidationError) {
      return res.status(400).json({ error: err })
  }
  next(err)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
