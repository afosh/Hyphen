import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/userReducers";
//import { projectReducer } from "./reducers/projectReducers";
import projects from "./reducers/projectReducers";
import posts from "./reducers/postReducers";

const userInfoFromStorage = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : null;
const initialState = {
  authReducer: userInfoFromStorage,
  // projectReducer: [],
};
const reducer = combineReducers({
  authReducer,
  //projectReducer,
  projects,
  posts,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
