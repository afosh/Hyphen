const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const { signed } = require("../../middlewares/isAuth");
const { find } = require("../../models/User");
//Get User Login
exports.login_get = function (req, res) {
  const bearerHeader = req.headers["autorization"];
  if (typeof bearerHeader !== "undefined") {
    res.redirect("/");
  }
  console.log(req.headers);

  res.send("welcome to the login page");
};
//Post User Login
exports.login_post = function (req, res) {
  //Check if the user isnt already logged in
  const bearerHeader = req.headers["autorization"];
  if (typeof bearerHeader !== "undefined") {
    res.redirect("/");
  }

  //Get data from the body
  var name = req.body.name;
  var password = req.body.password;
  var email = req.body.email;

  //check if the username is registered
  User.find({ name, password, email }, async (err, result) => {
    if (err) console.log(err);

    if (result !== null || typeof result !== "undefined" || result !== []) {
      let payload = {
        _id: result._id,
        name,
        email,
        role: result.role,
      };

      //signign the token
      let tokenData = await signed(payload);
      res.json({
        tokenData,
        message: "Successfully Logged in !",
      });
    } else {
      res.send(err);
    }
  });
};

/* 
User.find({ name }, (err, result) => {
    if (err) console.log(err);

    console.log("this is result" + result);

    if (result !== null || typeof result !== 'undefined') {
      //check if the email is correct
      User.findOne({ email }, (err, rez) => {
        if (err) console.log(err);

        if (rez !== null) {
          //compare the hashed password with the hashed password thats saved in the database
          bcrypt.compare(password, result[0].password, async (err, resultz) => {
            console.log(resultz);
            if (resultz) {
              //preparing payload for token
              let payload = {
                _id: rez._id,
                name,
                email,
                role: rez.role
              };

              //signign the token
              let tokenData = await signed(payload);
              res.json({
                tokenData,
                message: "Successfully Logged in !"
              });
            } else {
              console.log(resultz);
              res.send("WRONG FOCKING PASSWORD");
            }
          });
        } else {
          res.send("Wrong Email");
        }
      });
    }
  });
*/
