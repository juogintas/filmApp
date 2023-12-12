import express from "express";
import mongoose from "mongoose";
import filmsRouter from "./src/routes/films.js";
import "dotenv/config";

const app = express();

app.use(express.json());

app.use(filmsRouter);

mongoose
  .connect(process.env.MONGODB_CONNECTION)
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`App listed on port  ${process.env.PORT}`);
});
