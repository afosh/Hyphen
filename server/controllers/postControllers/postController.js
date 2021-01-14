const Post = require("../../models/Post");
// will get all the posts made by any one that the

exports.post_get = (req, res) => {
  Post.find((err, results) => {
    if (err) console.log(err);

    res.json(results);
  });
};

exports.post_create = (req, res) => {
  try {
    let title = req.body.title;
    let user = req.body.user;
    let body = req.body.body;

    var data = new Post({
      title,
      user,
      body,
    });
    data.save();
    res.json({
      message: "success",
      data,
    });
  } catch (error) {
    res.redirect("/social");
  }
};

exports.post_one = (req, res) => {};
