import { repositoryGenre } from "../repositories/genre-repository.js";

async function validateUniqueGenre(genre: string) {
  const genreName = await repositoryGenre.getGenreName(genre);
  if (genreName)
   {
    throw {
      name: "DuplicatedGenreName",
      message: "This genre already exists!",
    };
  }
}

async function createGenre(genre: string) {
  await validateUniqueGenre(genre);

  return repositoryGenre.createGenre(genre);
}

function getGenres() {
  return repositoryGenre.getGenres();
}

export const genresService = {
  createGenre,
  getGenres
};