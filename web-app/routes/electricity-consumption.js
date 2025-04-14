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
    let sqlquery = "SELECT c.country_name,y.year_number,p.consum_per_capita,ROUND((SUM(CASE WHEN s.source_id = 1 THEN g.generate_value ELSE 0 END) *100 / (SUM(g.generate_value))),2)   as generate_percent_by_fossil , ROUND((SUM(CASE WHEN s.source_id = 2 THEN g.generate_value ELSE 0 END) *100 / (SUM(g.generate_value))),2)   as generate_percent_by_nuclear , ROUND(( SUM(CASE WHEN s.source_id = 3 THEN g.generate_value ELSE 0 END) *100 / (SUM(g.generate_value))),2)   as generate_percent_by_renewables FROM electricity_generation g INNER JOIN countries c ON g.country_id = c.country_id INNER JOIN years y ON g.year_id = y.year_id INNER JOIN electricity_source s ON g.source_id = s.source_id INNER JOIN primary_energy_consumption p ON g.country_id = p.country_id AND g.year_id = p.year_id GROUP BY g.country_id,g.year_id HAVING y.year_number = 2020 ORDER BY g.country_id ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("electricity-consumption", { data: rows });
        }
    }
    );
});



// Export the router object so index.js can access it
module.exports = router;