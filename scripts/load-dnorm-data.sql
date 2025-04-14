
USE electricity;
DROP TABLE IF EXISTS denormalised;
CREATE TABLE denormalised (
    country varchar(255),
    year int,
    access_electricity_percentage float,
    access_clean_fuels_percentage float,
    renewable_electricity_generate_capacity float,
    financial_flows float,
    renewable_in_energy_consumption float,
    electricity_from_fossil float,
    electricity_from_nuclear float,
    electricity_from_renewables float,
    low_carbon_electricity float,
    primary_energy_consum float,
    energy_intensity_level float,
    co2_emission_amount float,
    renewables_in_primary_energy float,
    gdp_growth float,
    gdp_per_capita float,
    density varchar(255),
    land_area float,
    latitude float,
    longitude float
);

LOAD DATA INFILE '/home/coder/project/electricity/data/electricity.csv'
INTO TABLE denormalised
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS pivot_table;
CREATE TABLE pivot_table AS (
    SELECT country,year,access_electricity_percentage AS access_percentage,'fossil fuels' AS generating_source, electricity_from_fossil AS generate_value , primary_energy_consum,co2_emission_amount,gdp_growth,gdp_per_capita FROM denormalised
    UNION ALL
    SELECT country,year ,access_electricity_percentage AS access_percentage,'nuclear' AS generating_source, electricity_from_nuclear AS generate_value , primary_energy_consum,co2_emission_amount,gdp_growth,gdp_per_capita FROM denormalised
    UNION ALL
    SELECT country,year ,access_electricity_percentage AS access_percentage,'renewables' AS generating_source, electricity_from_renewables AS generate_value, primary_energy_consum,co2_emission_amount,gdp_growth,gdp_per_capita FROM denormalised
);
