import { AUTH, LOGIN, REGISTER } from "../constants/userConstants";
import * as api from "../api/index.js";

export const signIn = (userInfo, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userInfo);

    dispatch({ type: LOGIN, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (userInfo, router) => async (dispatch) => {
  try {
    const { data } = await api.register(userInfo);

    dispatch({ type: REGISTER, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
