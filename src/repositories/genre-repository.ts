import prisma from "../database/db.js";

function createGenre(genre: string) {
  return prisma.genre.create({
    data: {
      genre: genre,
    },
  });
}

function getGenres() {
  return prisma.genre.findMany({
    select: {
      id: true,
      genre: true,
    },
  });
}

  function getGenreName(genre: string) {
    return prisma.genre.findMany({
      where: {
        genre: genre,
      },
      select: {
        id: true,
        genre: true,
      },
    });
  }

  function getGenreId(id: number) {
    return prisma.genre.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        genre: true,
      },
    });
  }

export const repositoryGenre = {
    createGenre,
    getGenres,
    getGenreName,
    getGenreId
};