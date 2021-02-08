const express = require("express");
const app = express();
const db = require("./database/db");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const projectsRouter = require("./routes/projectsRoutes");
const postRouter = require("./routes/socialRoutes");
const courseRouter = require("./routes/coursesRoutes");
const cors = require("cors");

const formidable = require("express-formidable");

const PORT = 5000 || process.env.PORT;

db.Connect();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const corsOptions = {
  origin: "localhost:3000",
};
// for parsing multipart/form-data
// app.use(formidable());
app.use("/user", userRoutes);
app.use("/project", projectsRouter);
app.use("/social", postRouter);
app.use("/course", courseRouter);
app.get("/", (req, res, corsOptions) => {
  res.send("helloo world");
});

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));
