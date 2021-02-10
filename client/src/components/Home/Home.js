import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProjects } from "../../actions/projectActions";
// import User from "../User/index";
import Projects from "../Projects/index";
import Project from "../Projects/Project/index";
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [currentId, dispatch]);
  return (
    <div className="container">
      <Projects setCurrentId={setCurrentId} />
      <Project setCurrentId={setCurrentId} />
      {/* <User /> */}
    </div>
  );
};
export default Home;
