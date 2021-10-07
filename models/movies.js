const mongoose = require("mongoose");
const { GenresSchema } = require("./genres");

const MovieSchema = new mongoose.Schema({
  genres: {
    type: [GenresSchema],
    required: true
  },
  title: {
    required: true,
    type: String,
  },
  numberInStock: {
    type: Number,
    required: true,
  },
  dailyRentalRate: {
    type: Number,
    retured: true,
  },
});

const Movies = new mongoose.model("Movies", MovieSchema);

module.exports = Movies;
