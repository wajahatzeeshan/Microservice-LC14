import express from "express";
import moviesControllers from "../controllers/moviesControllers.js";

const Router = express.Router();

Router.route("/movies")
    .get(moviesControllers.getAllMovies)
    .post(moviesControllers.createMovie);

Router.route("/movies/:id")
.get(moviesControllers.getSingleMovie)
.put(moviesControllers.updateMovie)
.delete(moviesControllers.deleteMovie);

export default Router;

