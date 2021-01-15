const e = require("express");
const Course = require("../../models/Course");

exports.course_get = (req, res) => {
  Course.find((err, result) => {
    if (err) console.log(err);

    res.json(result);
  });
};

exports.Course_create = (req, res) => {
  try {
    var role = req.body.role;
    if (role !== 0 || id !== null || typeof id !== "undefined") {
      title = req.body.title;

      subTitle = req.body.subTitle;

      body = req.body.body;

      user = req.body.user;

      var data = new Course({
        title,

        subTitle,

        body,

        user,
      });

      console.log(data);

      data.save();

      res.redirect("/course/");
    }
  } catch (error) {
    console.log(error);

    res.redirect("/");
  }
};

exports.course_edit = (req, res) => {
  var id = req.params.id;
  //get data from the body to update
  var title = req.body.title;
  var body = req.body.body;
  var subTitle = req.body.subTitle;
  var user = req.body.user;
  var role = req.body.role;
  //collect the data in order to update the database
  var updated = {
    title,
    body,
    subTitle,
    user,
  };
  // update the values in the database

  Course.updateOne({ _id: id }, updated, {}, (err, success) => {
    if (err) console.log(err);

    res.send(success);
  });
};

exports.course_get_one = (req, res) => {
  var id = req.params.id;
  try {
    if (typeof id !== "undefined" || id !== null)
      Course.findOne({ _id: id }, (err, result) => {
        if (err) console.log(err);

        if (typeof result !== "undefined" || result !== null) {
          res.json(result);
        } else {
          res.send("internal error");
        }
      });
  } catch (error) {
    console.log(error);
    res.redirect("/course");
  }
};

exports.course_delete = (req, res) => {
  var id = req.params.id;
  try {
    Course.deleteOne({ _id: id }, {}, (err, result) => {
      if (err) console.log(err);

      res.json(result);
    });
  } catch (error) {
    console.log(error);
    res.redirect("/course");
  }
};
