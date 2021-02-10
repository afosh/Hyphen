import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.js";
import Home from "./components/Home/Home";
import User from "./components/User/index";
import Header from "./components/Header/index";
// material imports

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/user" exact component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
