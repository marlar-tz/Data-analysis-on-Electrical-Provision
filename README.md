# Data Analysis on Electrical Provision

This project is about analyzing data related to electrical provision. I obtained the dataset from the Kaggle website[link](https://www.kaggle.com/datasets/anshtanwar/global-data-on-sustainable-energy/data). In this project, we analyze and model the data to enable queries through a web application.
 Within the web application, we answer various questions based on the dataset.<br>
 ![](/resources/questions%20for%20dataset.png)
 
<br><b>The primary focus of this project is on database management using MySQL.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [How to run](#how-to-run)

## Overview

### Screenshot

Data queries preview <br>
![](/resources/website%20preview.png)<br>


## My process

### Built with

- MySQL
- Node.js
- HTML
- CSS

### What I learned

In this project , I learned about
- how to create and load data in MySQL
- how to queries data which satisfy the interested questions.
- how to use node.js to create a web application


## How to run

run '!mysql -t < /electricity/scripts/setup-database.sql' to  create data, user and then grant the user access to the database. <br>

run
- '!mysql -t < /electricity/scripts/create-tables.sql'
-  '!mysql -t < /electricity/scripts/load-dnorm-data.sql'
- !mysql -t < /electricity/scripts/ingest-data.sql
to create tables specified in the SQL script. <br>

To run the web app , enter 'node app.js' in terminal.
