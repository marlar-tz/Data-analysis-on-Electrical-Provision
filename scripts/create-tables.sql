USE electricity;

DROP TABLE IF EXISTS primary_energy_consumption;
DROP TABLE IF EXISTS electricity_access;
DROP TABLE IF EXISTS electricity_generation;
DROP TABLE IF EXISTS electricity_source;
DROP TABLE IF EXISTS co2_emission;
DROP TABLE IF EXISTS gdp;
DROP TABLE IF EXISTS countries;
DROP TABLE IF EXISTS years;

CREATE TABLE countries (
  country_id int PRIMARY KEY AUTO_INCREMENT,
  country_name varchar(255) NOT NULL
);

CREATE TABLE years (
  year_id int PRIMARY KEY AUTO_INCREMENT,
  year_number int NOT NULL
);

CREATE TABLE primary_energy_consumption (
  country_id int,
  year_id int,
  consum_per_capita float NOT NULL,
  FOREIGN KEY (country_id) REFERENCES countries(country_id),
  FOREIGN KEY (year_id) REFERENCES years(year_id),
  PRIMARY KEY (country_id,year_id)
);

CREATE TABLE electricity_access (
  country_id int,
  year_id int,
  access_percentage float NOT NULL,
  FOREIGN KEY (country_id) REFERENCES countries(country_id),
  FOREIGN KEY (year_id) REFERENCES years(year_id),
  PRIMARY KEY (country_id,year_id)
);

CREATE TABLE electricity_source (
  source_id int PRIMARY KEY AUTO_INCREMENT,
  source_name varchar(255) NOT NULL
);


CREATE TABLE electricity_generation (
  country_id int,
  year_id int,
  source_id int,
  generate_value float NOT NULL,
  FOREIGN KEY (source_id) REFERENCES electricity_source(source_id),
  FOREIGN KEY (country_id) REFERENCES countries(country_id),
  FOREIGN KEY (year_id) REFERENCES years(year_id),
  PRIMARY KEY (country_id,year_id,source_id)
);


CREATE TABLE co2_emission (
  country_id int,
  year_id int,
  co2_emission_amount float NOT NULL,
  FOREIGN KEY (country_id) REFERENCES countries(country_id),
  FOREIGN KEY (year_id) REFERENCES years(year_id),
  PRIMARY KEY (country_id,year_id)
);

CREATE TABLE gdp (
  country_id int,
  year_id int,
  gdp_per_capita float NOT NULL,
  gdp_growth_rate float NOT NULL,
  FOREIGN KEY (country_id) REFERENCES countries(country_id),
  FOREIGN KEY (year_id) REFERENCES years(year_id),
  PRIMARY KEY (country_id,year_id)
);

