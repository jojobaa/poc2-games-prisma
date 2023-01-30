# poc2-games-prisma 

# Rotas:

POST: /genres </br>
Body: `{ "genre": "Terror" }`

GET: /genres </br>
Response: `[{ "id": 1, "genre": "Aventura" }, { "id": 2, "genre": "Ação" }]`

POST: /games </br>
Body: `{ "name_game": "Stardew Valley", "review": 10, "genre_id": 1}` </br>

GET: /games </br>
Response: [{ "id": 1, "name_game": "Stardew Valley", "review": 10, "genre": "Aventura" }, { "id": 2, "name_game": "Valorant", "review": 8, "genre": "Jogo de tiro tático" }]

PATCH: /games/:id </br>
Body: {"review": 10}

DELETE: /games/:id </br>
