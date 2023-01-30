import { Request, Response } from "express";
import { User } from "../protocols/protocols.js";
import { usersRepository } from "../repositories/user-repository.js";

export async function createUser(req: Request, res: Response) {
    const { name } = req.body as User;
  
    try {
      const insertReturn = await usersRepository.createUser(name);
      return res.status(201).send(`Your user id is: ${insertReturn.rows[0].id}`);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  export async function getUsers(req: Request, res: Response) {
    try {
      const users = await usersRepository.getUsers();
      return res.status(200).send(users.rows);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }