import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "./Project/index";
import ProjectForm from "./ProjectForm/index";
import { Grid, CircularProgress, Button } from "@material-ui/core";

const Projects = ({ setCurrentId }) => {
  const projects = useSelector((state) => state.projects);
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      !projects.length ?
      <CircularProgress /> : (
      <Grid>
        {projects.map((project) => (
          <Grid key={project.key}>
            <Project />
          </Grid>
        ))}
      </Grid>
      )
      <Project setCurrentId={setCurrentId} />
      {user ? (
        <div>
          <Button component={Link} to="/projectForm">
            Create new project
          </Button>
        </div>
      ) : (
        <Button></Button>
      )}
    </>
  );
};

export default Projects;
