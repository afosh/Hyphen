import React, { useState, useEffect } from "react";
import { Button, Typography, Paper, Input } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { create, update } from "../../../actions/projectActions";

const ProjectForm = ({ currentId, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [projectData, setProjectData] = useState({ title: "" });
  const project = useSelector((state) =>
    currentId ? state.project.find((title) => title._id === currentId) : null
  );

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(create({ ...projectData, name: user.name }));
      // clear();
    } else {
      dispatch(update(currentId, { ...projectData, name: user.name }));
      // clear();
    }
  };
  /*  const clear = () => {
    setCurrentId(0);
    setProjectData({ title: "", files: "" });
  }; */
  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);
  return (
    <Paper>
      <Typography>Create new Project</Typography>
      <form onSubmit={handleSubmit}>
        <Input name="title" label="Project Title" />
        <Input type="file" />
        <Button type="submit" onSubmit={handleSubmit}>
          Create
        </Button>
        {/*  <Button type="submit">Clear</Button> */}
      </form>
    </Paper>
  );
};

export default ProjectForm;
