const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "projects/");
  },
  filename: function (req, file, cb) {
    var name = uuidv4();
    console.log(name);
    name = name.slice(0, 8);
    cb(null, name + ".zip");
  },
});

module.exports.upload = upload = multer({
  storage: storage,
});

/* 
change the name of the zip/rar based on the returned ID of the new project, then move it to "projects" file, then decompress it


"mimetype": "application/zip"
"mimetype": "application/x-rar-compressed"


*/
