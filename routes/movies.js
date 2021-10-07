const express = require("express");
const router = express.Router();
const Movies = require("../models/movies");
const { Genres } = require("../models/genres");

router.get("/", async (req, res) => {
  try {
    const movies = await Movies.find()
    console.log(movies,'movies')
    return res.status(200).send(movies);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  const genres =await Genres.find()
  const movie = new Movies({
    title: req.body.title,
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    genres
  });
  try {
    await movie.save();
    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
