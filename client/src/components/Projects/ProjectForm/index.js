import React, { useState, useEffect } from "react";
import { Button, Typography, Paper, Input } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createProject, update } from "../../../actions/projectActions";

const ProjectForm = ({ currentId, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [projectData, setProjectData] = useState({ title: "", files: "" });
  const project = useSelector((state) =>
    currentId ? state.projects.find((title) => title._id === currentId) : null
  );

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createProject({ ...projectData, name: user.name }));
      // clear();
    } else {
      dispatch(update(currentId, { ...projectData, name: user.name }));
      // clear();
    }
  };
  /* const clear = () => {
    setCurrentId(0);
    setProjectData({ title: "" });
  }; */
  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);
  return (
    <Paper>
      <Typography>Create new Project</Typography>
      <form onSubmit={handleSubmit}>
        <Input name="title" label="Project Title" />
        <div>
          <FileBase
            type="file"
            multiple={true}
            onDone={({ base64 }) =>
              setProjectData({ ...projectData, files: base64 })
            }
          />
        </div>

        <Button type="submit">Create</Button>
        {/*  <Button type="submit">Clear</Button> */}
      </form>
    </Paper>
  );
};

export default ProjectForm;
