const Post = require("../../models/Post");
//POSTS TIMELINE

exports.postsTimeLine = (req, res) => {
  Post.find((err, result) => {
    if (err) console.log(err);

    if (typeof result !== "undefined" || result !== null || result !== []) {
      res.json(result);
    } else {
      res.json({ Message: "NO POST AVAILABLE" });
    }
  });
};
