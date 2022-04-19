-- Run file using this command from root directory of repo: 
-- psql -d aleck < sql/debug_test_1.sql

DROP TABLE IF EXISTS players;

-- documentation: https://www.postgresql.org/docs/12/sql-createtable.html
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE NOT NULL,
    -- age NOT NULL INTEGER,
    age INTEGER NOT NULL,
    fave_category VARCHAR(50) NOT NULL
);

-- documentation: https://www.postgresql.org/docs/current/sql-insert.html
INSERT INTO players (name, fave_category, age)
VALUES
('Alec', 32, 'Strategy'),
('Dan', 59, 'Cooperative'),
('Ray', 7, 'Adventure'),
('Rawaha', 150, 'Economic'),
('Autumn', 92, 'Strategy'),
('Javier', 9001, 'Economic');