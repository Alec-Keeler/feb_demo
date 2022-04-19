-- Run file using this command from root directory of repo: 
-- psql -d boardgame_dev < sql/debug_test_1.sql

DROP TABLE IF EXISTS players;

-- documentation: https://www.postgresql.org/docs/12/sql-createtable.html
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE NOT NULL,
    age INTEGER NOT NULL,
    fave_category VARCHAR(50) NOT NULL
);

-- documentation: https://www.postgresql.org/docs/current/sql-insert.html
INSERT INTO players (name, age, fave_category)
VALUES
('Alec', 32, 'Strategy'),
('Dan', 59, 'Cooperative'),
('Ray', 7, 'Adventure'),
('Rawaha', 150, 'Economic'),
('Autumn', 92, 'Strategy'),
('Javier', 9001, 'Economic');