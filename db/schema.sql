-- Database 
CREATE DATABASE burgers;

USE burgers;

-- Table 
CREATE TABLE burgers(
id INTEGER AUTO_INCREMENT,
burger_name VARCHAR(50),
devoured BOOLEAN,

PRIMARY KEY(id),
);
