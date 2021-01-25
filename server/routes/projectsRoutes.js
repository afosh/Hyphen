var express = require("express");
var Router = express.Router();

const projectsTimeLineController = require("../controllers/timelineControllers/projectsTimeLineController");
const hanlderController = require("../controllers/projectControllers/projectHandlerController");
const projectController = require("../controllers/projectControllers/projectController");
//Get Projects TimeLine
Router.get("/v1/", projectsTimeLineController.projectsTimeLine_get);

Router.post(
  "/v2/upload",

  projectController.uploadProject
);
module.exports = Router;
