
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var partials = require('express-partials');
// var ejs = require('ejs');

var indexRouter = require('./routes/index');
/* var userRouter = require('./routes/user');
var postRouter = require('./routes/post');
var regRouter = require('./routes/reg');
var doRegRouter = require('./routes/doReg');
var loginRouter = require('./routes/login');
var doLoginRouter = require('./routes/doLogin');
var logoutRouter = require('./routes/logout'); */
/* 
  var usersRouter = require('./routes/users');
  var helloRouter = require('./routes/hello');
  var listRouter = require('./routes/list');
 */
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(partials());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
/* app.use('/u/:user', userRouter);
app.use('/post', postRouter);
app.use('/reg', regRouter);
app.use('/reg', doRegRouter);
app.use('/login', loginRouter);
app.use('/login', doLoginRouter);
app.use('/logout', logoutRouter); */

//app.use('/users', usersRouter);
// app.use('/hello', helloRouter);
// app.use('/list', listRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
