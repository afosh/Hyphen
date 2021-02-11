import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Course from "./Course/index";

const Courses = ({ setCurrentId }) => {
  const courses = useSelector((state) => state.courses);

  return !courses.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {courses.map((course) => (
        <Grid key={course._id} item xs={12} sm={6} md={6}>
          {/*  <Post post={post} setCurrentId={setCurrentId} /> */}
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
