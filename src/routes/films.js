import { Router } from "express";
const router = Router();

import {
  GET_RANDOM_FILM,
  GET_FILMS,
  ADD_FILM,
  GET_FILM_BY_ID,
  UPDATE_FILM,
  DELETE_FILM,
} from "../controllers/films.js";

router.get("/randomFilms", GET_RANDOM_FILM);
router.get("/films", GET_FILMS);
router.post("/films", ADD_FILM);
router.get("/films/:id", GET_FILM_BY_ID);
router.get("/films/random", GET_RANDOM_FILM);
router.put("/films/:id", UPDATE_FILM);
router.delete("/films/:id", DELETE_FILM);

export default router;
