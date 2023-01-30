import Joi from "joi";

export const gamesSchema = Joi.object({
  name_game: Joi.string().required(),
  genre_id: Joi.number().integer().required(),
});