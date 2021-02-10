import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, register } from "../../actions/userActions";
// import { AUTH } from "../../constants/userConstants";
import {
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  Grid,
  Input,
  Container,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "./styles";
import Box from "@material-ui/core/Box";
const initialState = {
  name: "",
  email: "",
  password: "",
};

const User = ({ type }) => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((isSignup) => !isSignup);
    setShowPassword(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(register(form, history));
    } else {
      dispatch(signIn(form, history));
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={2}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Typography component="h1" variant="h5" className={classes.h1}>
            {isSignup ? "Register" : "Log In"}
          </Typography>
          <Grid container spacing={4}>
            {isSignup && (
              <>
                <Input
                  name="name"
                  variant="outlined"
                  label="Name"
                  fullWidth
                  required
                  type="name"
                  onChange={handleChange}
                  autoComplete="name"
                  className={classes.input}
                />
              </>
            )}

            <Input
              className={classes.input}
              name="email"
              variant="filled"
              label="Email"
              required
              type="email"
              fullWidth
              autoComplete="email"
              onChange={handleChange}
              color="secondary"
            />
            <Input
              className={classes.input}
              name="password"
              variant="filled"
              label="Password"
              fullWidth
              required
              autoComplete="current-password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            className={classes.submit}
          >
            {isSignup ? "Register" : "Log in"}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} className={classes.form}>
                {isSignup ? "have an account ?" : "Create an Account"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default User;
