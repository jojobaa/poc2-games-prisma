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

  async function createGame(name_game: string, genre_id: number) {
    await gameValidate(name_game);
    await genreId(genre_id);
  
    return gamesRepository.createGame(name_game, genre_id);
  }
  
  export const gameService = {
    createGame,
  };