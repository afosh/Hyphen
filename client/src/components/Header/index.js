import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { LOGOUT } from "../../constants/userConstants";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Avatar,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
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
      <AppBar position="static" className={classes.appBar}>
        <div>
          <Typography component={Link} to="/" variant="h3" align="center">
            Hyphen
          </Typography>
        </div>
        <Toolbar>
          {user ? (
            <div>
              <Avatar>{user.name}</Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.name}
              </Typography>
              <Button onClick={logout}>Log out</Button>
            </div>
          ) : (
            <Button>SignIn</Button>
          )}
          {/* <IconButton edge="start">
            <AccountCircle />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
