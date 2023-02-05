import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import {
  musicPostListReducer,
  musicPostDetailsReducer,
} from "./reducers/musicPostReducers";
// import { userLoginReducer } from "./reducers/userReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

// update our state to handle data below
const reducer = combineReducers({
  musicPostList: musicPostListReducer,
  musicPostDetails: musicPostDetailsReducer,
  userLogin: userLoginReducer,
  ////////////    TESTING REGISTER USER
  userRegister: userRegisterReducer,
});

// pull data from localStorage when user first logs in
// load our state with this data
// if don't have it, set it to null
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

export const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
  middleware: middleware,
});

export default store;
