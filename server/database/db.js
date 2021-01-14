const mongoose = require("mongoose");

exports.Connect = () => {
  mongoose.connect(
    "mongodb://localhost:27017/finalProject",
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (err) console.log(err);
      console.log("connected to the database");
    }
  );
};
