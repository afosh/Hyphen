import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const Project = (project, setCurrentId) => {
  const dispatch = useDispatch();
  //const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      <Card>
        <Typography>{project.title}</Typography>
        {user?._id === project?.owner && (
          <div>
            <Typography>{project.title}</Typography>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Project;
