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

async function createGenre(name: string) {
  await validateUniqueGenre(name);

  return repositoryGenre.createGenre(name);
}

export const genresService = {
  createGenre,
};