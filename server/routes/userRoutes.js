var express = require("express");
var Router = express.Router();

var { verify } = require("../middlewares/isAuth");
var profileController = require("../controllers/userControllers/profileController");
var registerController = require("../controllers/userControllers/registerController");
var loginController = require("../controllers/userControllers/loginController");
// Get register
Router.get("/v1/register", registerController.register_get);

//Post Register
Router.post("/v1/register", registerController.register_post);

//Get Login
Router.get("/v1/login", loginController.login_get);

//Post Login
Router.post("/v1/login", loginController.login_post);

//Get Profile
Router.get("/v1/user/:id", profileController.profile_get);

//Update Profile
Router.put("/v1/user/:id", verify, profileController.profile_edit);
module.exports = Router;
