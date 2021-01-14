var express = require("express");
var Router = express.Router();

const postsTimeLineController = require('../controllers/timelineControllers/postsTimeLineController.js');


//Get Projects TimeLine
Router.get("/v1/projects", postsTimeLineController.postsTimeLine);

module.exports = Router;
