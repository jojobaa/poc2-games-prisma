import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { User, UserId } from "../protocols/protocols.js";

function createUser(name: string): Promise<QueryResult<UserId>> {
    return connection.query(
      `INSERT INTO reviewers(name) VALUES ($1) RETURNING id;`, [name]
    );
  }

  function getUsers(): Promise<QueryResult<User>> {
    return connection.query(
      `SELECT id, name FROM reviewers;`
    );
  }

  export const usersRepository = {
    createUser,
    getUsers,
  };