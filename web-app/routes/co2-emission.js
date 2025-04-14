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


// router.get('/', function (req, res) {
//     let sqlquery = "SELECT c.country_name , y.year_number , a.co2_emission_amount , p.consum_per_capita FROM co2_emission a INNER JOIN primary_energy_consumption p ON a.country_id = p.country_id AND a.year_id = p.year_id INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id WHERE y.year_number BETWEEN 2017 AND 2019 ORDER BY a.country_id ASC";
//     dbcon.query(sqlquery, (err, rows) => {
//         if (err) {
//             next(err); //send the error on to the error handler

//         } else {
//             res.render("co2-emission", { data: rows });
//         }
//     }
//     );

// });

router.get('/', function (req, res) {
    let sqlquery = "SELECT c.country_name , y.year_number , a.co2_emission_amount , p.consum_per_capita FROM co2_emission a INNER JOIN primary_energy_consumption p ON a.country_id = p.country_id AND a.year_id = p.year_id INNER JOIN countries c ON a.country_id = c.country_id INNER JOIN years y ON a.year_id = y.year_id WHERE y.year_number = 2019 ORDER BY a.country_id ASC";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("co2-emission", { data: rows });
        }
    }
    );

});


// Export the router object so index.js can access it
module.exports = router;