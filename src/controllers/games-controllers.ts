import { Request, Response } from "express";
import { Games, GameGenre } from "../protocols/protocols.js";
import { gamesRepository } from "../repositories/game-repository.js";
import { gameService } from "../services/games-services.js";

export async function createGame(req: Request, res: Response) {
    const { name_game, review, genre_id } = req.body as Games;
  
    try {
      await gameService.createGame(name_game,review, genre_id);
      return res.sendStatus(201);
    } catch (err) {
      if (err.name === "DuplicatedGameName") return res.status(400).send(err.message);
      if (err.name === "GenreNotFound") return res.status(404).send(err.message);
      return res.status(500).send(err.message);
    }
  }

  export async function getGames(req: Request, res: Response) {
    const { genre } = req.query as GameGenre;
  
    try {
      const games = await gamesRepository.getGames(genre);
      return res.status(200).send(games.rows);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }