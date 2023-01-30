import prisma from "../database/db.js";

function createGame(name_game: string, review: number, genre_id: number) {
  return prisma.games.create({
    data: {
      name_game: name_game,
      review: review,
      genre_id: genre_id,
    },
  });
}

function getGames() {
  return prisma.games.findMany({
    select: {
      id: true,
      name_game: true,
      review: true,
      genre: {
        select: {
          genre: true,
        },
      },
    },
  });
}

function getGameGenre(genre: string) {
  return prisma.games.findMany({
    select: {
      id: true,
      name_game: true,
      review: true,
      genre: {
        select: {
          genre: true,
        },
      },
    },
    where: {
      genre: {
        genre: {
          startsWith: genre,
          mode: "insensitive",
        },
      },
    },
  });
}


function getGameName(name_game: string) {
  return prisma.games.findUnique({
    where: {
      name_game: name_game,
    },
  });
}

function getGameId(id: number) {
  return prisma.games.findUnique({
    where: {
      id: id,
    },
  });
}

function updateReview(review: number, id: number) {
  return prisma.games.update({
    where: {
      id: id,
    },
    data: {
      review: review,
    },
  });
}

function deleteGame(id: number) {
  return prisma.games.delete({
    where: {
      id: id,
    },
  });
}

export const gamesRepository = {
  createGame,
  getGames,
  getGameGenre,
  getGameName,
  getGameId,
  updateReview,
  deleteGame
};