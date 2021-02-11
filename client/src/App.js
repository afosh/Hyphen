import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.js";
import Home from "./components/Home/Home";
import User from "./components/User/index";
import Header from "./components/Header/index";
import Projects from "./components/Projects/index";
import ProjectForm from "./components/Projects/ProjectForm/index";

import useStyles from "./styles";
import Testo from "./components/Testo.js";
import CreateProj from "./components/CreateProj";

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
          <Route path="/teet" component={CreateProj} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
