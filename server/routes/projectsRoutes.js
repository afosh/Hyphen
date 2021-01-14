var express = require("express");
var Router = express.Router();

const projectsTimeLineController = require("../controllers/timelineControllers/projectsTimeLineController");

//Get Projects TimeLine
Router.get("/v1/projects", projectsTimeLineController.projectsTimeLine_get);

module.exports = Router;
