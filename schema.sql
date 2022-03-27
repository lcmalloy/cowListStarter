DROP DATABASE IF EXISTS cowlist;

CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE cows (id INTEGER PRIMARY KEY AUTO_INCREMENT, name_ TEXT NOT NULL, description_ TEXT NOT NULL);

INSERT INTO cows(name_, description_) VALUES ('Jacob', 'A true believer');
INSERT INTO cows(name_, description_) VALUES ('King', 'A royal cow');
INSERT INTO cows(name_, description_) VALUES ('Spot', 'Born with no spots');