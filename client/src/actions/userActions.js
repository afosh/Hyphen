//import axios from "axios";
/* import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILED,
} from "../constants/userConstants"; */
//import Cookie from "js-cookie";
import { AUTH } from "../constants/userConstants";
import * as api from "../api/index.js";

export const signIn = (userInfo, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(userInfo);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (userInfo, router) => async (dispatch) => {
  try {
    const { data } = await api.register(userInfo);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

/* const update = ({ userId, name, email, password }) => async (
  dispatch,
  getState
) => {
  const {
    userSignin: { userInfo },
  } = getState();
  dispatch({
    type: USER_UPDATE_REQUEST,
    payload: { userId, name, email, password },
  });
  try {
    const { data } = await axios.put(
      "/api/users/" + userId,
      { name, email, password },
      {
        headers: {
          Authorization: "Bearer " + userInfo.token,
        },
      }
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAILED, payload: error.message });
  }
};

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post("/user/login", { email, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    // Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAILED, payload: error.message });
  }
};

// register action
const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post("/user/register", {
      name,
      email,
      password,
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    // Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILED, payload: error.message });
  }
};
export { signin, register, update };
 */
