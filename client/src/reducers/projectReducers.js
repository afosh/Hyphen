import { CREATE_PROJECT, GET_PROJECTS } from "../constants/projectConstants";

/* const projectReducer = (projects = [], action) => { */
export default (projects = [], action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return [...projects, action.payload];
    case CREATE_PROJECT:
      return [...projects, action.payload];
    default:
      return projects;
  }
};
//export { projectReducer };
//export default projectReducer;
