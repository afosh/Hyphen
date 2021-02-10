import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    textDecoration: "none",
    // color: "white",
  },
  toolbar: { display: "flex", justifyContent: "flex-end", right: "0" },

  avatar: {
    display: "flex",
    // width: "400px",
  },
  button: {
    //  color: "white",
  },
}));
