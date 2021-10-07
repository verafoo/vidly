const mongoose = require("mongoose");

const GenresSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    maxlength: 50,
    minlength: 5,
  },
});

const Genres = mongoose.model("Genres", GenresSchema);

module.exports.Genres = Genres;
module.exports.GenresSchema = GenresSchema;
