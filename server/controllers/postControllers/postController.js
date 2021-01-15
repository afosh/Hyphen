const Post = require("../../models/Post");
// will get all the posts made by any one that the

/*
exports.post_get = (req, res) => {
  Post.find((err, results) => {
    if (err) console.log(err);

    res.json(results);
  });
};
*/

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
    console.log(err);
    res.redirect("/social");
  }
};

exports.post_one = (req, res) => {
  try {
    let id = req.params.id;

    Post.findById(id, (err, result) => {
      if (err) console.log(err);

      if (typeof result !== "undefined" || result !== null) {
        res.json(result);
      }
    });
  } catch (error) {
    console.log(err);
    res.redirect("/social");
  }
};

exports.post_edit = (req, res) => {
  var id = req.params.id;
  //get data from the body to update
  var title = req.body.title;
  var body = req.body.body;
  var hidden = req.body.hidden;
  //collect the data in order to update the database
  var updated = {
    title,
    body,
    hidden,
  };
  // update the values in the database

  Post.updateOne({ _id: id }, updated, {}, (err, success) => {
    if (err) console.log(err);

    res.send(success);
  });
};

exports.post_delete = async (req, res) => {
  try {
    //if the user isnt the correct user he wont be allowed to edit

    var id = req.params.id;
    var dot = await Post.deleteOne({ _id: id }, {}, (err, result) => {
      if (err) console.log(err);

      console.log(result);
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.redirect("/social");
  }
};
