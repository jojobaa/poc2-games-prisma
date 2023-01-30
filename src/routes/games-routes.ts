import { Router } from "express";
import { getGames, createGame } from "../controllers/games-controllers.js";
import { validate} from "../middlewares/middleware.js";
import { gamesSchema } from "../schemas/games-schema.js";

const gamesRouter = Router();

gamesRouter.post("/games", validate(gamesSchema), createGame);
gamesRouter.get("/games", getGames);

export default gamesRouter;