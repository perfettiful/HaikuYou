### Schema
CREATE DATABASE haiku_db;
USE haiku_db;

CREATE TABLE haikus
(
	id INT NOT NULL AUTO_INCREMENT,
    haiku_form_type VARCHAR(1) NOT NULL,
	haiku_title VARCHAR(50) NOT NULL,
    haiku_author VARCHAR(255),
    haiku_category VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE haiku_type (
    id INT NOT NULL AUTO_INCREMENT,
    form_type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE haiku_category (
	id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE haiku_snaps (
	id INT NOT NULL AUTO_INCREMENT,
    haiku_id INT,
    total_snaps INT,
    PRIMARY KEY (id)
);
