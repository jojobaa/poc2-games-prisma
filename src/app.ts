import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routerGenre from "./routes/genre-routes.js";
import routerUser from "./routes/users-routes.js";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(routerGenre);
server.use(routerUser);
server.get("/health", (req, res) => {
    res.send("ok!")
})

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running in port: ${port}`));
