const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  name: String,
  user: String,
  type: String,
  body: String,
  files: String,
  contributors: [{ user: String }],
  comments: [
    { commentId: Number, default: 0 },
    { user: String },
    { body: String }
  ],
  date: { type: Date, default: Date.now() }
});
// compile our model
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
