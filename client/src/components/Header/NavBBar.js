import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { Avatar } from "@material-ui/core";
import { LOGOUT } from "../../constants/userConstants";

import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  alt: {
    textShadow: "1px 1px 1px #000",
    display: "block",
    marginTop: "900",
    color: "0984e3",
    float: "right",
  },
  root: {
    display: "block",
    paddingTop: "2px",
    background: "#0984e3",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textShadow: "1px 1px 1px #000",
    flexGrow: 1,
    fontSize: "30px",
  },
}));

export default function ButtonAppBar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.root}>
          {user ? (
            <div className={classes.avatar}>
              <Avatar>{user.name}</Avatar>
              <Typography className={classes.userName} variant="h6">
                {user.name}
              </Typography>
              <Button onClick={logout}>Log out</Button>
            </div>
          ) : (
            <IconButton
              className={classes.alt}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              component={Link}
              to="/user"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          )}

          <Typography variant="h6" className={classes.title}>
            Hyphen
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
