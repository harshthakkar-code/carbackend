var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose');
var UserModel = require('./models/user.model')
var ProductModel = require('./routes/products');
var app = express();


mongoose.connect(mongoDB)
  .then(() => {
    console.log('MongoDB is  connected');
  })
  .catch((error) => {
    console.log('MongoDB is not connected');
  });

UserModel({
  name: "test",
  email: "test@123@gmail.com",
  mobile: 12345676543
}).save().then(()=>{
  console.log("saved")
})
.catch((error) => {
  console.log('not saved');
});

UserModel.find({name:"test"}).then(()=>{
  console.log("find")
})
.catch((error) => {
  console.log('not fined');
});


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
app.use('/product', ProductModel);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
