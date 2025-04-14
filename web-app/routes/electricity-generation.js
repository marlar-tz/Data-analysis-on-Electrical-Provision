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
    let sqlquery = "SELECT c.country_name, ROUND(AVG(a.access_percentage),2) AS average_access_percentage , ROUND(AVG(g.generate_value),2) AS avergage_generate_amount , s.source_name FROM electricity_access a INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id INNER JOIN electricity_generation g ON a.country_id = g.country_id INNER JOIN electricity_source s ON g.source_id = s.source_id GROUP BY a.country_id,g.source_id HAVING AVG(a.access_percentage) = 100 ORDER BY a.country_id ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-generation", { data: rows });
        }
    }
    );

});

router.get('/less-generate', function (req, res) {
    let sqlquery = "SELECT c.country_name, ROUND(AVG(a.access_percentage),2) AS average_access_percentage ,s.source_name ,  ROUND(AVG(g.generate_value),2) AS avergage_generate_amount FROM electricity_access a INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id INNER JOIN electricity_generation g ON a.country_id = g.country_id INNER JOIN electricity_source s ON g.source_id = s.source_id GROUP BY a.country_id,g.source_id HAVING AVG(a.access_percentage) < 30 ORDER BY a.country_id ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-generation-less", { data: rows });
        }
    }
    );

});


router.get('/total-less-generate', function (req, res) {
    let sqlquery = "SELECT c.country_name, ROUND(AVG(a.access_percentage),2) AS average_access_percentage , ROUND(SUM(g.generate_value),2) AS total_generate_amount FROM electricity_access a INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id INNER JOIN electricity_generation g ON a.country_id = g.country_id INNER JOIN electricity_source s ON g.source_id = s.source_id GROUP BY a.country_id HAVING AVG(a.access_percentage) <30 ORDER BY a.country_id ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-generation-lesstotal", { data: rows });
        }
    }
    );

});


// Export the router object so index.js can access it
module.exports = router;