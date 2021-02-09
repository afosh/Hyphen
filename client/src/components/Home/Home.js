import React from "react";
import User from "../User/index";
import Login from "../Login/Login";
import Register from "../Register/Register";
const Home = () => {
  return (
    <div className="container">
      {/*   <Login />
      <Register /> */}
      <User />
    </div>
  );
};
export default Home;
