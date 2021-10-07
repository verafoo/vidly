const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
  isGold: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
});

const Courses = new mongoose.model("Courses", CoursesSchema);

module.exports = Courses