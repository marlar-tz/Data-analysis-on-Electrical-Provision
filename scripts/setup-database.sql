/* create a project database, and drop it first if it already exists */
DROP DATABASE IF EXISTS electricity;
CREATE DATABASE electricity;

/* create a database user, called marlar, and drop it first if it already exists */
DROP USER IF EXISTS 'marlar'@'%';
CREATE USER 'marlar'@'%' IDENTIFIED WITH mysql_native_password BY 'california';

/* grant user access to the project data, which was created earlier */
GRANT ALL ON electricity.* TO 'marlar'@'%';

/* only for running in colab, grant user marlar to server related configuration */
GRANT SELECT ON mysql.* TO 'marlar'@'%';
