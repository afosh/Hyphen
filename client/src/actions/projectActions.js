import { CREATE_PROJECT } from "../constants/projectConstants";

import * as api from "../api/index";

export const create = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE_PROJECT, data });
  } catch (err) {
    console.log(err);
  }
};
export const update = (project) => async (dispatch) => {};
export const getProjects = (project) => async (dispatch) => {};
