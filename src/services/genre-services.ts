import { repositoryGenre } from "../repositories/genre-repository.js";

async function validateUniqueGenre(name: string) {
  const genreName = await repositoryGenre.getGenreName(name);
  if (genreName.rows.length > 0) {
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

export const genresService = {
  createGenre,
};