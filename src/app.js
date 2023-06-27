const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

const bankhub_link = require('./routes/bankhubLink');
const exchangeToken = require('./routes/exchangeToken');
const transactions = require('./routes/transactions');

app.use('/api/bankhubLink', bankhub_link);
app.use('/api/exchangeToken', exchangeToken);
app.use('/api/transactions', transactions);

module.exports = app;
