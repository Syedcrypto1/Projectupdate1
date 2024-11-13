const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/db');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const indexRouter = require('./routes/index');
const surveysRouter = require('./routes/survey');
app.use('/', indexRouter);
app.use('/surveys', surveysRouter);

app.get('/survey/check', (req, res) => {
  res.send('Survey Check Page');
});
app.use(express.static('public'));



const testRouter = require('./routes/test');
app.use('/test', testRouter);

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error', // Set the title for the error page
    message: err.message,
    error: err
  });
});

module.exports = app;
