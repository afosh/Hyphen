import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/userReducers";
/* import {
  userSigninReducer,
  userRegisterReducer,
} from "./reducers/userReducers.js";


import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;
const initialState = {
  userSignin: { userInfo },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
}); */

const reducer = combineReducers({
  authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  //initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
