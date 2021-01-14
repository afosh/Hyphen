const bcrypt = require("bcryptjs");
const User = require("../../models/User");

//get Register Page
exports.register_get = function(req, res) {
  const bearerHeader = req.headers["autorization"];
  if (typeof bearerHeader !== "undefined") {
    res.redirect("/");
  }
  res.send("welcome to the register page");
};

//register post
exports.register_post = function(req, res) {
  // check if the user isnt already logged in
  const bearerHeader = req.headers["autorization"];
  if (typeof bearerHeader !== "undefined") {
    res.redirect("/");
  } else {
    // Get the data from the body
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    let role = 0;
    //hashing the password for protection
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        password = hash;
        var data = new User({
          name,
          password,
          email,
          role
        });
        // checking if the username already exist in the database
        User.findOne({ name }, (err, results) => {
          if (err) console.log(err);

          if (results !== null) {
            res.send(" USERNAME ALREADY EXIST");
          } else {
            User.findOne({ email }, (err, resultz) => {
              if (err) console.log(err);

              //check if the email exist on the database
              if (resultz !== null) {
                res.send("email exist");
              } else {
                //if username and email dont exist on the database, register them.
                console.log("registered successfully");
                data.save();
                res.redirect("/");
              }
            });
          }
        });
      });
    });
  }
};
