const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  password: String,
  email: String,
  role: Number,
  body: String,
  about: {
    info: String,
    type: String,
    profilePic: String,
  },
  friends: [{ id: String, friendName: String }],
  projects: [{ projectId: String }],
  posts: [{ postId: String }],
  date: { type: Date, default: Date.now() },
});
// compile our model
const User = mongoose.model("User", userSchema);
module.exports = User;
