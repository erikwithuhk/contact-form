const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const router = require('./config/router');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', router);

module.exports = app;
