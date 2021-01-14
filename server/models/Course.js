const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  subTitle: String,
  body: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
