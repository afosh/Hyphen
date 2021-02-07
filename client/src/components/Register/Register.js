import React from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Register</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth />
        <TextField
          name="email"
          variant="outlined"
          label="Email"
          fullWidth
          multiline
          rows={4}
        />
        <TextField
          name="password"
          variant="outlined"
          label="Password"
          fullWidth
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Log In
        </Button>
        <Typography>have an account ?</Typography>
      </form>
    </Paper>
  );
};

export default Register;
