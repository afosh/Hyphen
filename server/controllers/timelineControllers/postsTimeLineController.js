const Post = require("../../models/Post");
//POSTS TIMELINE

exports.postsTimeLine = (req, res) => {
  Post.find((err, results) => {
    if (err) console.log(err);

    if (typeof results !== "undefined" || results !== null || results !== []) {
      res.json(results);
    } else {
      res.json({ Message: "NO POST AVAILABLE" });
    }
  });
};
