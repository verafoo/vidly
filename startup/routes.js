const express = require("express");
const genres = require("../routes/genres");
const course = require("../routes/courses");
const movies = require("../routes/movies");
const register = require("../routes/register");
const auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/genres", genres);
  app.use("/api/courses", course);
  app.use("/api/movies", movies);
  app.use("/api/register", register);
  app.use("/api/auth", auth);
  app.use(error);
};
