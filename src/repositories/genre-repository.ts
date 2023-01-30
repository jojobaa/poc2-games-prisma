import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Genre } from "../protocols/genre-protocols.js";

function createGenre(genre: string): Promise<QueryResult> {
    return connection.query(
        `INSERT INTO genre(genre) VALUES ($1);`, [genre]
    );
}

function getGenres(): Promise<QueryResult<Genre>> {
    return connection.query(
        `SELECT * FROM genre;`
    );
}

export const repositoryGenre = {
    createGenre,
    getGenres,
};