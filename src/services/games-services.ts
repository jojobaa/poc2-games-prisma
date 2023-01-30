import { number } from "joi";
import { gamesRepository } from "../repositories/game-repository.js";
import { repositoryGenre } from "../repositories/genre-repository.js";

async function gameValidate(name_game: string) {
    const gameName = await gamesRepository.getGameName(name_game);
    if (gameName.rows.length > 0) {
      throw {
        name: "DuplicatedGameName",
        message: "There is already a game with this name!",
      };
    }
  }

  async function genreId(id: number) {
    const genre = await repositoryGenre.getGenreId(id);
    if (genre.rows.length === 0) {
      throw {
        name: "GenreNotFound",
        message: "Could not find a genre with this id!",
      };
    }
  }

  async function createGame(name_game: string, review:number, genre_id: number) {
    await gameValidate(name_game);
    await genreId(genre_id);
  
    return gamesRepository.createGame(name_game, review, genre_id);
  }

  async function gameIdValidade(id: number) {
    const game = await gamesRepository.getGameId(id);
    if (game.rows.length === 0) {
      throw {
        name: "GameNotFound",
        message: "Could not find a game with this id!",
      };
    }
  }
  
  async function updateReview(review: number, id: number) {
    await gameIdValidade(id);
  
    return gamesRepository.updateReview(review, id);
  }
  

  export const gameService = {
    createGame,
    updateReview
  };