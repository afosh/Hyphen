import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, register } from "../../actions/userActions";
// import { AUTH } from "../../constants/userConstants";
import { Paper, TextField, Typography, Button } from "@material-ui/core";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const User = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((isSignup) => !isSignup);
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
    <Paper>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">{isSignup ? "Register" : "SignIn"}</Typography>
        {isSignup && (
          <>
            <TextField
              name="name"
              variant="outlined"
              label="Name"
              fullWidth
              required
              type="name"
              onChange={handleChange}
            />
          </>
        )}
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          required
          type="email"
          fullWidth
          multiline
          rows={4}
          onChange={handleChange}
        />
        <TextField
          name="password"
          variant="outlined"
          label="Password"
          fullWidth
          required
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {isSignup ? "Register" : "SignIn"}
        </Button>
        <Button onClick={switchMode}>
          {isSignup ? "have an account ?" : "Create an Account"}
        </Button>
      </form>
    </Paper>
  );
};

export default User;
