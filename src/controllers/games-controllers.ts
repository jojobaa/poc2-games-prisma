import { Request, Response } from "express";
import { Games, GameGenre, GameReview, GameId } from "../protocols/protocols.js";
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

  export async function reviewGame(req: Request, res: Response) {
    const { id } = req.params as GameId;
    const { review } = req.body as GameReview;
  
    try {
      await gameService.updateReview(review, Number(id));
      return res.sendStatus(201);
    } catch (err) {
      if (err.name === "GameNotFound") return res.status(404).send(err.message);
      if (err.message === 'invalid input syntax for type integer: "NaN"')
        return res.status(400).send("Param id must be an integer number");
      return res.status(500).send(err.message);
    }
  }