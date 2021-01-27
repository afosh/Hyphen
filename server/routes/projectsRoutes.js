var express = require("express");
var Router = express.Router();

const projectsTimeLineController = require("../controllers/timelineControllers/projectsTimeLineController");
const hanlderController = require("../controllers/projectControllers/projectHandlerController");
const projectController = require("../controllers/projectControllers/projectController");
//Get Projects TimeLine
Router.get("/v1/", projectsTimeLineController.projectsTimeLine_get);

//uploading a project file and creating it on the database
Router.get("/v1/project/:id", projectController.getSingleProject);
Router.get("/v1/projects", projectController.getProjects);
Router.post(
  "/v2/upload",
  hanlderController.upload.single("zip"),
  projectController.uploadProject
);
module.exports = Router;
