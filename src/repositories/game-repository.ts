import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Game} from "../protocols/protocols.js";

function createGame(name_game: string,review: number, genre_id: number): Promise<QueryResult> {
    return connection.query(
      `INSERT INTO games(name_game, review, genre_id) VALUES ($1, $2, $3);`,[name_game,review, genre_id]
    );
  }

  function getGames(genre: string): Promise<QueryResult<Game>> {
    return connection.query(
      `SELECT ga.id, ga.name_game, ga.review, ge.genre FROM games ga JOIN genre ge ON ga.genre_id = ge.id
      ${genre ? `WHERE ge.genre ILIKE $1` : ``};
      `,
      genre ? [genre] : []
    );
  }

  function getGameName(name_game: string): Promise<QueryResult<Game>> {
    return connection.query(
      `SELECT id, name_game, review, genre_id FROM games WHERE name_game = $1;`,[name_game]
    );
  }

  function getGameId(id: number): Promise<QueryResult<Game>> {
    return connection.query(
      `SELECT id, name_game, review, genre_id FROM games WHERE id = $1;`,[id]
    );
  }

  function updateReview(review: number, id: number): Promise<QueryResult> {
    return connection.query(
      `UPDATE games SET review = $1 WHERE id = $2;`,[review, id]
    );
  }

  export const gamesRepository = {
    createGame,
    getGames,
    getGameName,
    getGameId,
    updateReview
  };