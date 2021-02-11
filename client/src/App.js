import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.js";
import Home from "./components/Home/Home";
import User from "./components/User/index";
import Header from "./components/Header/index";
import Projects from "./components/Projects/index";
import ProjectForm from "./components/Projects/ProjectForm/index";
import Posts from "./components/Posts/index";
import PostForm from "./components/Posts/PostForm/index";
import useStyles from "./styles";
import Testo from "./components/Testo.js";
import CourseForm from "./components/Courses/CourseForm/index";
import Courses from "./components/Courses/index";
import Course from "./components/Courses/Course/index";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projectForm" exact component={ProjectForm} />
          <Route path="/testoo" component={Testo} />
          <Route path="/user" exact component={User} />
          <Route path="/posts" component={Posts} />
          <Route path="/postForm" exact component={PostForm} />
          <Route path="/courseForm" exact component={CourseForm} />
          {/*  <Route path="/course" exact component={Course} /> */}
          <Route path="/courses" exact component={Courses} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
