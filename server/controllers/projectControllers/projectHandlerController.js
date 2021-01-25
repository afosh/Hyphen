const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "projects/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports.upload = upload = multer({
  storage: storage,
});
