const express = require("express");
const router = express.Router();
const { Genres } = require("../models/genres");

router.get("/", async (req, res) => {
  const genres = await Genres.find();
  res.send(genres);
});

router.post("/", async (req, res) => {
  const genres = new Genres({ name: req.body.name });
  genre = await genres.save();
  res.send(genre);
});

router.put("/:id", async (req, res) => {
  const genres = await Genres.findById(req.params.id);
  if (genres) {
    genres.name = req.body.name;
    genres.save();
    res.send("updated");
  }
});

router.delete("/:id", async (req, res) => {
  const genres = await Genres.findByIdAndRemove(req.params.id);
  if (genres) {
    res.send("delete success");
  }
});

module.exports = router;
