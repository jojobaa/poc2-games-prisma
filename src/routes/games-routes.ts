import { Router } from "express";
import { getGames, createGame, reviewGame, deleteGame} from "../controllers/games-controllers.js";
import { validate} from "../middlewares/middleware.js";
import { gamesSchema, reviewSchema } from "../schemas/games-schema.js";

const gamesRouter = Router();

gamesRouter.post("/games", validate(gamesSchema), createGame);
gamesRouter.get("/games", getGames);
gamesRouter.patch("/games/:id", validate(reviewSchema), reviewGame);
gamesRouter.delete("/games/:id", deleteGame);

export default gamesRouter;