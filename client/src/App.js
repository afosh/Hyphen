import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.js";
import Home from "./components/Home/Home";
import User from "./components/User/index";

// material imports
import { AppBar, Typography, IconButton, Toolbar } from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="header">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h3" position="center">
              Hyphen
            </Typography>
            <IconButton edge="start">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <div className="container">
        <Route path="/" component={Home} />

        <Route path="/users" component={User} />
      </div>
    </Router>
  );
}

export default App;
