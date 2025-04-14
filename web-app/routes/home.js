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
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2020;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2000', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2000;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2001', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2001;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2002', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2002;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2003', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2003;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2004', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2004;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2005', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2005;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2006', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2006;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2007', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2007;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2008', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2008;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2009', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2009;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2010', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2010;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2011', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2011;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2012', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2012;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2013', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2013;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2014', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2014;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2015', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2015;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2016', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2016;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2017', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2017;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2018', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2018;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});


router.get('/year-2019', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2019;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});

router.get('/year-2020', function (req, res) {
    let sqlquery = "SELECT * FROM pivot_table WHERE year=2020;";
    dbcon.query(sqlquery, (err, rows) => {
        if (err) {
            next(err); //send the error on to the error handler

        } else {
            res.render("index", { data: rows });
        }
    }
    );

});



// Export the router object so index.js can access it
module.exports = router;