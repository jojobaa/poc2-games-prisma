import Joi from "joi";

export const genresSchema = Joi.object({
  genre: Joi.string().required(),
});