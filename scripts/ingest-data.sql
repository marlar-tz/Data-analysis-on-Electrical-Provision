
USE electricity;
DELETE FROM primary_energy_consumption;
DELETE FROM electricity_access;
DELETE FROM electricity_generation;
DELETE FROM electricity_source;
DELETE FROM co2_emission;
DELETE FROM gdp;
DELETE FROM countries;
DELETE FROM years;

INSERT INTO countries (country_name)
    SELECT DISTINCT country
    FROM pivot_table;

INSERT INTO years (year_number)
    SELECT DISTINCT year
    FROM pivot_table;

INSERT INTO electricity_access (country_id,year_id,access_percentage)
    SELECT DISTINCT c.country_id,y.year_id,p.access_percentage
    FROM pivot_table p
    INNER JOIN countries c
    ON p.country = c.country_name
    INNER JOIN years y
    ON p.year = y.year_number;

INSERT INTO primary_energy_consumption (country_id,year_id,consum_per_capita)
    SELECT DISTINCT c.country_id , y.year_id , p.primary_energy_consum
    FROM pivot_table p
    INNER JOIN countries c
    ON p.country = c.country_name
    INNER JOIN years y
    ON p.year = y.year_number;

INSERT INTO electricity_source (source_name)
    SELECT DISTINCT generating_source
    FROM pivot_table;


INSERT INTO electricity_generation (country_id,year_id,source_id,generate_value)
    SELECT DISTINCT c.country_id , y.year_id ,s.source_id , p.generate_value
    FROM pivot_table p
    INNER JOIN countries c
    ON p.country = c.country_name
    INNER JOIN years y
    ON p.year = y.year_number
    INNER JOIN electricity_source s
    ON p.generating_source = s.source_name;


INSERT INTO co2_emission (country_id,year_id,co2_emission_amount)
    SELECT DISTINCT c.country_id , y.year_id ,p.co2_emission_amount
    FROM pivot_table p
    INNER JOIN countries c
    ON p.country = c.country_name
    INNER JOIN years y
    ON p.year = y.year_number;

INSERT INTO gdp (country_id,year_id,gdp_per_capita,gdp_growth_rate)
    SELECT DISTINCT c.country_id , y.year_id ,p.gdp_per_capita,p.gdp_growth
    FROM pivot_table p
    INNER JOIN countries c
    ON p.country = c.country_name
    INNER JOIN years y
    ON p.year = y.year_number;
