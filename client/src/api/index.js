import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
// project
export const createProject = (newProject) =>
  API.post("/project/v2/upload", newProject);
export const getProjects = () => API.get("/project/v1/projects");
export const deleteProject = (id) => API.delete(`/project/v1/projects/${id}`);
// course
// user
export const signIn = (userInfo) => API.post("/user/login", userInfo);
export const register = (userInfo) => API.post("/user/register", userInfo);
