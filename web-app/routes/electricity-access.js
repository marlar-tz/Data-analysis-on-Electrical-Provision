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
    let sqlquery = "SELECT c.country_name,  ROUND(SUM(a.access_percentage),2) AS total_percentage , ROUND(AVG(a.access_percentage),2) AS average_percentage FROM electricity_access a INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id GROUP BY a.country_id ORDER BY total_percentage DESC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-access", { data: rows });
        }
    }
    );

});

router.get('/full-access', function (req, res) {
    let sqlquery = "SELECT c.country_name, ROUND(SUM(a.access_percentage),2) AS total_percentage , ROUND(AVG(a.access_percentage),2) AS average_percentage FROM electricity_access a INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id GROUP BY a.country_id HAVING AVG(a.access_percentage) = 100 ORDER BY total_percentage DESC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-access-full", { data: rows });
        }
    }
    );

});


router.get('/notfull-access', function (req, res) {
    let sqlquery = "SELECT c.country_name, ROUND(SUM(a.access_percentage),2) AS total_percentage , ROUND(AVG(a.access_percentage),2) AS average_percentage FROM electricity_access a INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id GROUP BY a.country_id HAVING AVG(a.access_percentage) != 100 ORDER BY total_percentage DESC;"
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-access-notfull", { data: rows });
        }
    }
    );

});


// Export the router object so index.js can access it
module.exports = router;