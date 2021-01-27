const express = require("express");
const app = express();
const db = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const projectsRouter = require("./routes/projectsRoutes");
const postRouter = require("./routes/socialRoutes");
const courseRouter = require("./routes/coursesRoutes");

const formidable = require("express-formidable");

db.Connect();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// for parsing multipart/form-data
// app.use(formidable());
app.use("/user", userRoutes);
app.use("/project", projectsRouter);
app.use("/social", postRouter);
app.use("/course", courseRouter);
app.get("/", (req, res) => {
  res.send("helloo world");
});

app.listen(3000, () => console.log("server is up"));
