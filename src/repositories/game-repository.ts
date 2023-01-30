import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Game, GameJoin } from "../protocols/protocols.js";

function createGame(name_game: string, genre_id: number): Promise<QueryResult> {
    return connection.query(
      `INSERT INTO games(name_game, genre_id) VALUES ($1, $2);`,[name_game, genre_id]
    );
  }

  function getGames(genre: string): Promise<QueryResult<GameJoin>> {
    return connection.query(
      `SELECT ga.id, ga.name_game, ge.genre FROM games ga JOIN genre ge ON ga.genre_id = ge.id
      ${genre ? `WHERE ge.genre ILIKE $1` : ``};
      `,
      genre ? [genre] : []
    );
  }

  function getGameName(name_game: string): Promise<QueryResult<Game>> {
    return connection.query(
      `SELECT id, name_game genre_id FROM games WHERE name_game = $1;`,[name_game]
    );
  }

  export const gamesRepository = {
    createGame,
    getGames,
    getGameName,
  };