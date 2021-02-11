import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    background: "#242830",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  h1: {
    marginBottom: "2rem",
  },
  form: {
    color: "#0984e3",
    width: "100%", // Fix IE 11 issue.
    textAlign: "center",
    marginTop: theme.spacing(5),
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#1D2026",
  },
  input: {
    margin: "10px",
    padding: "10px",
    textAlign: "center",
    background: "#1D2026",
  },
}));
