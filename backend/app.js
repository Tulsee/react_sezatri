const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const products = require('./routes/product');
const user = require('./routes/user');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1', products);
app.use('/api/v1', user);

module.exports = app;
