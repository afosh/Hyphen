import * as actionType from "../constants/userConstants";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.LOGIN:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return {
        ...state,
        authData: action.data.payload,
        loading: false,
        errors: null,
      };

    case actionType.REGISTER:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: null,
      };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
export { authReducer };

export default authReducer;
