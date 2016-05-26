
USE stockFix;

CREATE TABLE ticker(
	id int(11) NOT NULL AUTO_INCREMENT,
    symbol varchar(50)
);

LOAD DATA LOCAL INFILE 'C:\nasdaqlisted.csv'
INTO TABLE ticker 