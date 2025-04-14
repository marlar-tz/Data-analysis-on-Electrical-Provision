const express = require("express");
const router = express.Router();
const assert = require('assert');
const mysql = require('mysql');
const env = require('dotenv').config();

var dbcon = mysql.createConnection({
    host: env.parsed.HOST,
    user: env.parsed.USER_NAME,
    password: env.parsed.PASSWORD,
    database: env.parsed.DATABASE
})


router.get('/', function (req, res) {
    let sqlquery = "SELECT c.country_name ,y.year_number ,a.access_percentage , b.gdp_per_capita , b.gdp_growth_rate FROM electricity_access a INNER JOIN gdp b ON a.country_id = b.country_id AND a.year_id = b.year_id INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id WHERE y.year_number=2020 AND b.gdp_per_capita != 0 ORDER BY a.access_percentage ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("gdp", { data: rows });
        }
    }
    );

});


router.get('/no-gdp', function (req, res) {
    let sqlquery = "SELECT c.country_name ,y.year_number ,a.access_percentage , b.gdp_per_capita , b.gdp_growth_rate FROM electricity_access a INNER JOIN gdp b ON a.country_id = b.country_id AND a.year_id = b.year_id INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id WHERE y.year_number = 2020 AND b.gdp_per_capita = 0 ORDER BY a.access_percentage ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("no-gdp", { data: rows });
        }
    }
    );

});


router.get('/positive-rate-gdp', function (req, res) {
    let sqlquery = "SELECT c.country_name ,y.year_number ,a.access_percentage , b.gdp_per_capita , b.gdp_growth_rate FROM electricity_access a INNER JOIN gdp b ON a.country_id = b.country_id AND a.year_id = b.year_id INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id WHERE y.year_number = 2020 AND b.gdp_growth_rate > 0 ORDER BY a.access_percentage ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("positive-rate-gdp", { data: rows });
        }
    }
    );

});


router.get('/negative-rate-gdp', function (req, res) {
    let sqlquery = "SELECT c.country_name ,y.year_number ,a.access_percentage , b.gdp_per_capita , b.gdp_growth_rate FROM electricity_access a INNER JOIN gdp b ON a.country_id = b.country_id AND a.year_id = b.year_id INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id WHERE y.year_number = 2020 AND b.gdp_growth_rate < 0 ORDER BY a.access_percentage ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("negative-rate-gdp", { data: rows });
        }
    }
    );

});



// Export the router object so index.js can access it
module.exports = router;