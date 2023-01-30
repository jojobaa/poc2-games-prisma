import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Genre } from "../protocols/protocols.js";

function createGenre(genre: string): Promise<QueryResult> {
    return connection.query(
        `INSERT INTO genre(genre) VALUES ($1);`, [genre]
    );
}

function getGenres(): Promise<QueryResult<Genre>> {
    return connection.query(
        `SELECT id, genre FROM genre;`
    );
}

function getGenreName(genre: string): Promise<QueryResult<Genre>> {
    return connection.query(
      `SELECT id, genre FROM genre WHERE genre = $1;`,[genre]
    );
  }

  function getGenreId(id: number): Promise<QueryResult<Genre>> {
    return connection.query(
      `SELECT id, genre FROM genre WHERE id = $1;`,[id]
    );
  }

export const repositoryGenre = {
    createGenre,
    getGenres,
    getGenreName,
    getGenreId
};