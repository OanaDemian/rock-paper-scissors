import express from "express";
import { router as indexRouter } from "./routes/index.js";
import { router as gameRouter } from "./routes/game.js";

const port = process.env.PORT || 3030;

export const app = express();

app.set("view engine", "ejs");
app.use(express.static("src"));

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/game", gameRouter);

app.listen(port, () => {
  console.log(`Rock Paper Scissors app listening on port ${port}`);
});
