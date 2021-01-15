var express = require("express");
var Router = express.Router();
const courseController = require("../controllers/courseControllers/courseController");

//get all courses
Router.get("/", courseController.course_get);

//get one course
Router.get("/list/:id", courseController.course_get_one);

//create course
Router.post("/create", courseController.Course_create);

//edit course
Router.put("/update/:id", courseController.course_edit);

//delete course

Router.delete("/delete/:id", courseController.course_delete);

module.exports = Router;
