import { gamesRepository } from "../repositories/game-repository.js";
import { repositoryGenre } from "../repositories/genre-repository.js";

async function gameValidate(name_game: string) {
  const game = await gamesRepository.getGameName(name_game);
  if (!game) {
    throw {
      name: "DuplicatedGameName",
      message: "There is already a game with this name!",
    };
  }
}

async function genreId(id: number) {
  const genre = await repositoryGenre.getGenreId(id);
  if (!genre) {
    throw {
      name: "GenreNotFound",
      message: "Could not find a genre with this id!",
    };
  }
}

async function createGame(name_game: string, review: number, genre_id: number) {
  await gameValidate(name_game);
  await genreId(genre_id);

  return gamesRepository.createGame(name_game, review, genre_id);
}

async function gameIdValidade(id: number) {
  const game = await gamesRepository.getGameId(id);
  if (!game) {
    throw {
      name: "GameNotFound",
      message: "Could not find a game with this id!",
    };
  }
}

async function getGames() {
  const games = await gamesRepository.getGames();
  return games;
}

async function getGamesGenre(genre: string) {
  const games = await gamesRepository.getGameGenre(genre);

  return games;
}

async function updateReview(review: number, id: number) {
  await gameIdValidade(id);

  return gamesRepository.updateReview(review, id);
}

async function deleteGame(id: number) {
  await gameIdValidade(id);

  return gamesRepository.deleteGame(id);
}



export const gameService = {
  createGame,
  updateReview,
  deleteGame,
  getGames,
  getGamesGenre
};