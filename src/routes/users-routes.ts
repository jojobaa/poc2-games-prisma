import { Router } from "express";
import { getUsers, createUser } from "../controllers/users-controllers.js";
import { validate } from "../middlewares/middleware.js";
import { usersSchema } from "../schemas/users-schema.js";

const userRouter = Router();

userRouter.post("/users", validate(usersSchema), createUser);
userRouter.get("/users", getUsers);

export default userRouter;