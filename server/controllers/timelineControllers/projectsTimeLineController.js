const Project = require("../../models/Project");
//Projects TimeLine !

exports.projectsTimeLine_get = (req, res) => {
  Project.find((err, results) => {
    if (err) console.log(err);

    if (typeof results !== "undefined" || results !== null || results !== []) {
      res.json(results);
    } else {
      res.json({ Message: "NO PROJECTS AVAILABLE" });
    }
  });
};
