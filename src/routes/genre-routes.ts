import { Router } from "express";
import { getGenres, createGenre } from "../controllers/genre-controllers.js";
import { validateGenre} from "../middlewares/genre-middleware.js"
import { genresSchema } from "../schemas/genre-schema.js";

const routerGenre = Router();

routerGenre.post("/genres", validateGenre(genresSchema), createGenre);
routerGenre.get("/genres", getGenres);

export default routerGenre;