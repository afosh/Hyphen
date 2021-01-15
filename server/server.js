const express = require("express");
const app = express();
const db = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const projectsRouter = require("./routes/projectsRoutes");
const postRouter = require("./routes/socialRoutes");

db.Connect();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/projects", projectsRouter);
app.use("/social", postRouter);
app.get("/", (req, res) => {
  res.send("helloo world");
});

app.listen(3000, () => console.log("server is up"));
