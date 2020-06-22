const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');

const deliveryRouter = require('./routes/deliveryRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', deliveryRouter);

module.exports = app;
