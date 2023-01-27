import express from "express";

const server = express();

server.get("/health", (req, res) => {
    res.send("ok!")
})

server.listen(5000, () => {
    console.log("deu bom!")
})