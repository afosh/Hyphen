const User = require("../../models/User");

//Getting Profile Page
exports.profile_get = (req, res) => {
  //Getting user ID from the browser request
  let id = req.params.id;
  //Searching if the user exist
  User.findById(id, (err, result) => {
    //if the user exists return those values
    if (typeof result !== "undefined") {
      let collection = {
        name: result.name,
        email: result.email,
        projects: result.projects,
        posts: result.posts,
        role: result.role,
        friends
      };
      res.json(collection);
      //if the user doesnt exists
    } else {
      res.send("User No Longer Exists!");
    }
  });
};

//Edit Profile
exports.profile_edit = (req, res) => {
  var _id = req.body._id;

  //if the user isnt the correct user he wont be allowed to edit

  if (_id !== req.params.id) {
    console.log("attempt failed");
    res.redirect("/");
  } else {
    //get data from the body to update
    var info = req.body.info;
    var type = req.body.type;

    //collect the data in order to update the database
    var updated = {
      info,
      type
    };
    // update the values in the database

    User.updateOne({ _id }, updated, (err, result) => {
      if (err) console.log(err);

      res.send(result);
    });
  }
};
