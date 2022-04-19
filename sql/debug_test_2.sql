-- This query should return a list of player names of players who are looking to
-- play Terraforming Mars.  We need to utilize our many-to-many relationship
-- to find the correct names.  It should return the names in alphabetical order.

-- Expected result:
--   name  
-- --------
--  Alec
--  Javier
--  Rawaha
-- (3 rows)

-- Test the query using the following command:
-- psql -d boardgame_dev < sql/debug_test_2

SELECT players.name
FROM players
JOIN boardgames ON (lfg.game_id = boardgame.id)
JOIN lfg ON (players.id = lfg.player_id)
WHERE boardgames.name = 'Terraforming Mars'
ORDER BY name;