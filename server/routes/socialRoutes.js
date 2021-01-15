var express = require("express");
var Router = express.Router();
var isAuth = require("../middlewares/isAuth");
const postsTimeLineController = require("../controllers/timelineControllers/postsTimeLineController.js");
const postController = require("../controllers/postControllers/postController");

//Get Projects TimeLine
Router.get("/", postsTimeLineController.postsTimeLine);

//Get Post
Router.get("/post/:id", postController.post_one);

//Create Post

Router.post("/post/create", postController.post_create);

//Update Post

Router.put("/post/update/:id", postController.post_edit);

//Delete Post

Router.delete("/post/delete/:id", postController.post_delete);

module.exports = Router;
