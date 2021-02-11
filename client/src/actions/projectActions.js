import { CREATE_PROJECT, GET_PROJECTS } from "../constants/projectConstants";

import * as api from "../api/index";

/* export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();
    dispatch({ type: GET_PROJECTS, data });
  } catch (err) {
    console.log(err);
  }
}; */
export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: GET_PROJECTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE_PROJECT, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const update = (project) => async (dispatch) => {};
