import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { LOGOUT } from "../../constants/userConstants";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import NavBBar from "./NavBBar";
import useStyles from "./styles";

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: LOGOUT });

    history.push("/user");

    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <div className="header">
      <NavBBar></NavBBar>
    </div>
  );
};

export default Header;

/*


      <AppBar position="static" className={classes.appBar}>
        <div>
          <Typography
            component={Link}
            to="/"
            variant="h3"
            className={classes.title}
          >
            Hyphen
          </Typography>
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.avatar}>
              <Avatar>{user.name}</Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.name}
              </Typography>
              <Button onClick={logout}>Log out</Button>
            </div>
          ) : (
            <Button component={Link} to="/user" classNAme={classes.button}>
              SignIn
            </Button>
          )}
        </Toolbar>
      </AppBar>

*/
