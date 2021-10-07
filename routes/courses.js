const express = require("express");
const router = express.Router();
const Courses = require("../models/courses");
const asyncMiddleware = require("../middleware/asyncMiddleware");
const winston = require('winston');

router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    // try {
    //   const courses = await Courses.find();
    //   res.status(200).send(courses);
    // } catch (err) {
    //   res.status(400).send(err);
    // }
    const courses = await Courses.find();
    winston.info('hi')
    res.status(200).send(courses);
  })
);

router.post("/", async (req, res) => {
  try {
    const course = new Courses({
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    });
    await course.save();
    return res.status(200).send(course);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Courses.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    });
    return res.status(200).send("updated successfully!");
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Courses.findByIdAndRemove(req.params.id);
    return res.status(200).send("deleted successfully!");
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
