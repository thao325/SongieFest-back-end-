import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import {
  musicPostListReducer,
  musicPostDetailsReducer,
} from "./reducers/musicPostReducers";
import { userLoginReducer } from "./reducers/userReducers";

// update our state to handle data below
const reducer = combineReducers({
  musicPostList: musicPostListReducer,
  musicPostDetails: musicPostDetailsReducer,
  userLogin: userLoginReducer,
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

//// OLD CODE ////////////

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { userLoginReducer } from "./reducers/userReducers";
// import {
//   musicPostListReducer,
//   musicPostDetailsReducer,
// } from "./reducers/musicPostReducers";

// // update our state to handle data below
// const reducer = combineReducers({
//   musicPostList: musicPostListReducer,
//   productDetails: musicPostDetailsReducer,
//   userLogin: userLoginReducer,
// });

// // pull data from localStorage when user first logs in
// // load our state with this data
// // if don't have it, set it to null
// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
