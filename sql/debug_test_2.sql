-- This query should return a list of player names of players who are looking to
-- play Terraforming Mars.  We need to utilize our many-to-many relationship
-- to find the correct names.  It should return the names in alphabetical order.

SELECT players.name
FROM players
JOIN boardgames ON (lfg.game_id = boardgames.id)
JOIN lfg ON (players.id = lfg.player_id)
WHERE boardgames.name = 'Terraforming Mars'
ORDER BY name;