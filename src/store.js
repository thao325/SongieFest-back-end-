import { configureStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import {
  musicPostListReducer,
  musicPostDetailsReducer,
} from "./reducers/musicPostReducers";

// update our state to handle data below
const reducer = combineReducers({
  musicPostList: musicPostListReducer,
  productDetails: musicPostDetailsReducer,
  userLogin: userLoginReducer,
});

// pull data from localStorage when user first logs in
// load our state with this data
// if don't have it, set it to null
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
