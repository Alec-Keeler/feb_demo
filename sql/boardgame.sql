-- Task 2
-- psql -d boardgame_dev < sql/boardgame.sql

-- Task 2d
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS boardgames;
DROP TABLE IF EXISTS players;

-- Task 2a
CREATE TABLE boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    avg_rating NUMERIC(3, 2) NOT NULL, -- 5.89
    max_players INTEGER NOT NULL,
    category VARCHAR(50)
);

-- Task 2b
CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE NOT NULL,
    fave_category VARCHAR(50) NOT NULL
);

-- Task 2c
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    boardgame_id INTEGER REFERENCES boardgames (id)
);

-- Task 3
INSERT INTO boardgames (name, avg_rating, max_players, category)
VALUES
    ('Gloomhaven', 8.8, 4, 'Adventure'),
    ('Pandemic Legacy: Season 1', 8.62, 4, 'Cooperative'),
    ('Brass: Birmingham', 8.66, 4, 'Economic'),
    ('Terraforming Mars', 8.43, 5, 'Economic'),
    ('Twilight Imperium: Fourth Edition', 8.7, 6, 'Strategy'),
    ('Spirit Island', 8.34, 4, 'Cooperative'),
    ('Mage Knight', 8.1, 4, 'Adventure'),
    ('Rising Sun', 7.88, 5, 'Strategy');

INSERT INTO reviews (content, boardgame_id)
VALUES
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2),
    ('This game is far too long!', 5),
    ('My friends and I really like this game, lots of replayability', 6),
    ('I can be a space pirate, favorite game hands down.', 5);

ALTER TABLE players ADD COLUMN 
prefers_video_games BOOLEAN DEFAULT false;

INSERT INTO players (name, fave_category, prefers_video_games)
VALUES
    ('Alec', 'Strategy', DEFAULT),
    ('Dan', 'Cooperative', false),
    ('Ray', 'Adventure', true),
    ('Rawaha', 'Economic', DEFAULT),
    ('Autumn', 'Strategy', DEFAULT),
    ('Javier', 'Economic', DEFAULT);

-- Task 4a
-- SELECT * FROM boardgames;

-- Task 4b
-- SELECT name, category FROM boardgames;

-- Task 4c (4e)
-- SELECT name, avg_rating FROM boardgames
-- WHERE category = 'Strategy';

-- Task 4d
-- SELECT name, avg_rating FROM boardgames
-- WHERE avg_rating BETWEEN 8.66 AND 9.00;

-- Task 4f
-- SELECT id, name, category FROM boardgames
-- WHERE category IN ('Adventure', 'Strategy')
-- ORDER BY category DESC
-- LIMIT 2;

-- Task 4e
-- SELECT * FROM reviews
-- WHERE content ILIKE '%t%';

-- Task 5a
-- UPDATE players
-- SET prefers_video_games = true
-- WHERE name IN ('Alec', 'Javier');

-- UPDATE boardgames
-- SET name = name || ' (Game of the Year!)'
-- WHERE avg_rating > 8.70;

-- Task 5b
-- DELETE FROM boardgames
-- WHERE id = 3;

-- Task 6a
-- SELECT * FROM boardgames
-- JOIN reviews ON (boardgames.id = reviews.boardgame_id)
-- WHERE avg_rating > 8.5;