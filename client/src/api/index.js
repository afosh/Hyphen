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
export const fetchProjects = () => API.get("/project/v1/projects");
export const deleteProject = (id) => API.delete(`/project/v1/projects/${id}`);
// course
export const fetchCourses = () => API.get("/course");
export const createCourses = (newCourse) =>
  API.post("/course/create", newCourse);
// posts
export const fetchPosts = () => API.get("/social");
export const createPost = (newPost) => API.post("/social/post/create", newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

// user
export const signIn = (userInfo) => API.post("/user/login", userInfo);
export const register = (userInfo) => API.post("/user/register", userInfo);
