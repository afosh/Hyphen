const Project = require("../../models/Project");
const extractFile = require("./extractFile");

// upload project final middleware
exports.uploadProject = async (req, res) => {
  //check if the file is .zip or .rar, then decompress them accordingly

  if (req.file.mimetype == "application/x-rar-compressed") {
    // this extract the file as .rar
    extractFile.extractRar(req.file);
  } else if (req.file.mimetype == "application/zip") {
    //extract the zip file
    extractFile.extractZip(req.file);
  }

  //get the name of the file to add to the database in the "files" property
  var files = req.file.filename.slice(0, req.file.filename.length - 4);
  //create the project in the dataase
  createProject(files, req);
  // send the final file
  res.send(req.file);
};

async function createProject(files, req) {
  //get the values from the body
  var name = req.body.name;
  var user = req.body.user;
  var type = req.body.type;
  var body = req.body.body;
  var files = files;
  //add the files to the database and the details
  var data = await new Project({
    name,
    user,
    type,
    body,
    files,
  });
  console.log(data);
  data.save(function (err, result) {
    if (err) res.send(err);
    console.log("Success");
  });
}

exports.getProjects = async (req, res) => {
  await Project.find((err, result) => {
    if (err) console.log(err);
    res.json({
      result,
    });
  });
};

exports.getSingleProject = async (req, res) => {
  var id = req.params.id;
  Project.findOne({ _id: id }, (err, result) => {
    if (err) console.log(err);

    res.json({ result });
  });
};

exports.getFiles = async (req, res) => {};
/*
user -> last added project -> get that project id + add it to the package id
user -> project ->

*/
