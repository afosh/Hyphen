import { React, useState, useEffect } from "react";
import axios from "axios";
import Pproject from "./Pproject";
function Testo() {
  const [Projects, setProjects] = useState([]);
  useEffect(() => {
    async function getThem() {
      var { data } = await axios.get(
        "http://localhost:5000/project/v1/projects"
      );

      await setProjects(data);
    }
    getThem();
  }, []);
  return (
    <div>
      {Projects.map((item, index) => {
        return (
          <div key={index}>
            <h1>id:{item._id}</h1>
            <h1>name:{item.name}</h1>
            <h1>type:{item.type}</h1>
            <h1>body: {item.body}</h1>
          </div>
        );
      })}
      <Pproject></Pproject>
    </div>
  );
}

export default Testo;
