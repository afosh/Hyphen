import { CREATE_PROJECT, GET_PROJECTS } from "../constants/projectConstants";

import * as api from "../api/index";

export const get = () => async (dispatch) => {
  try {
    const { data } = await api.getProjects();
    dispatch({ type: GET_PROJECTS, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const create = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE_PROJECT, data });
  } catch (err) {
    console.log(err);
  }
};

export const update = (project) => async (dispatch) => {};
