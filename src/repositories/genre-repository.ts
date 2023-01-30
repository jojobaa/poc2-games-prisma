import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Genre } from "../protocols/protocols.js";

function createGenre(genre: string): Promise<QueryResult> {
    return connection.query(
        `INSERT INTO genre(name) VALUES ($1);`, [genre]
    );
}

function getGenres(): Promise<QueryResult<Genre>> {
    return connection.query(
        `SELECT id, name FROM genre;`
    );
}

function getGenreName(genre: string): Promise<QueryResult<Genre>> {
    return connection.query(
      `SELECT id, name FROM genre WHERE genre = $1;`,[genre]
    );
  }

export const repositoryGenre = {
    createGenre,
    getGenres,
    getGenreName
};