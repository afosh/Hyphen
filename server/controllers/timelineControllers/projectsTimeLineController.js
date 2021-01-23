const Project = require("../../models/Project");
//Projects TimeLine !

exports.projectsTimeLine_get = (req, res) => {
  Project.find((err, result) => {
    if (err) console.log(err);

    if (typeof result !== "undefined" || result !== null || result !== []) {
      res.json(result);
    } else {
      res.json({ Message: "NO PROJECTS AVAILABLE" });
    }
  });
};
