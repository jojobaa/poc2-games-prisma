import { Request, Response } from "express";
import { Game, GameReview, GamePost, GameId, Genre } from "../protocols/protocols.js";
import { gameService } from "../services/games-services.js";

export async function createGame(req: Request, res: Response) {
    const { name_game, review, genre_id } = req.body as GamePost;
  
    try {
      await gameService.createGame(name_game,review, genre_id);
      return res.sendStatus(201);
    } catch (err) {
      return res.sendStatus(500)
    }
  }

  export async function getGames(req: Request, res: Response) {
    const { genre } = req.query as Genre;
  
    try {
      let games: Game[];
      if (genre) {
        games = await gameService.getGamesGenre(genre);
      }else {
        games = await gameService.getGames();
      }
      return res.status(200).send(games);
    } catch (err) {
      return res.sendStatus(500)
    }
  }

  export async function reviewGame(req: Request, res: Response) {
    const { id } = req.params as GameId;
    const { review } = req.body as GameReview;
  
    try {
      await gameService.updateReview(review, Number(id));
      return res.sendStatus(201);
    } catch (err) {
      return res.sendStatus(500)
    }
  }

  export async function deleteGame(req: Request, res: Response) {
    const { id } = req.params as GameId;
  
    try {
      await gameService.deleteGame(Number(id));
      return res.sendStatus(200);
    } catch (err) {
      return res.sendStatus(500)
    }
  }