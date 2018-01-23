/*Wondu Mamo, https://github.com/yealemiyelij |1 author(Wondu Mamo)*/
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id int AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN default false,
    date TIMESTAMP

);