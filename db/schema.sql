### Schema
CREATE DATABASE poems_db;
USE poems_db;

CREATE TABLE poems
(
	id int NOT NULL AUTO_INCREMENT,
    poem_type VARCHAR(1) NOT NULL,
	poem_title VARCHAR(255) NOT NULL,
    poem_text GLOB,
    poem_author VARCHAR(255),
	PRIMARY KEY (id)
);

CREATE TABLE poem_type (
    id int NOT NULL AUTO_INCREMENT,
    category VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
