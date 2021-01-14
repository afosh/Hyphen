const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  user: String,
  body: String,
  comments: [{ body: String }, { date: Date.now() }],
  date: { type: Date, default: Date.now() },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
// compile our model
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
