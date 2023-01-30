import { Router } from "express";
import { getGenres, createGenre } from "../controllers/genre-controllers.js";
import { validate} from "../middlewares/middleware.js"
import { genresSchema } from "../schemas/genre-schema.js";

const routerGenre = Router();

routerGenre.post("/genres", validate(genresSchema), createGenre);
routerGenre.get("/genres", getGenres);

export default routerGenre;