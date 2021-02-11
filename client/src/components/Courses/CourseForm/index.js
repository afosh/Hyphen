import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { createCourse } from "../../../actions/courseActions";

const CourseForm = ({ currentId, setCurrentId }) => {
  const [courseData, setCourseData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });
  const course = useSelector((state) =>
    currentId ? state.courses.find((id) => id === currentId) : null
  );
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (course) setCourseData(course);
  }, [course]);

  const clear = () => {
    setCurrentId(0);
    setCourseData({ title: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createCourse({ ...courseData, name: user.name }));
    if (currentId === 0) {
      dispatch(createCourse({ ...courseData, name: user.name }));
      /*    clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user.name }));
      clear(); */
    }
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">Create A Course</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={courseData.title}
          onChange={(e) =>
            setCourseData({ ...courseData, title: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={courseData.message}
          onChange={(e) =>
            setCourseData({ ...courseData, message: e.target.value })
          }
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default CourseForm;
