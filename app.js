require('dotenv').config()
const express = require('express');
const POST = process.env.POST || 3000;
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use('/index', routes);

app.listen(POST, console.log('Server is running'));

