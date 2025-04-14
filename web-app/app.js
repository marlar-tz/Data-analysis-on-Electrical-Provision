const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mustacheExpress = require('mustache-express');
const env = require('dotenv').config();

const app = express();
const port = 3000;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));


var dbcon = mysql.createConnection({
    host: env.parsed.HOST,
    user: env.parsed.USER_NAME,
    password: env.parsed.PASSWORD,
    database: env.parsed.DATABASE
})

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

const accessRoute = require('./routes/electricity-access');
app.use('/electricity-access', accessRoute);

const generateRoute = require('./routes/electricity-generation');
app.use('/electricity-generation', generateRoute);

const consumeRoute = require('./routes/electricity-consumption');
app.use('/electricity-consumption', consumeRoute);

const emissionRoute = require('./routes/co2-emission');
app.use('/co2-emission', emissionRoute);

const gdpRoute = require('./routes/gdp.js');
app.use('/gdp', gdpRoute);



app.listen(port, function () {
    console.log('The app is listening at http://localhost:' + port + '.');
})
