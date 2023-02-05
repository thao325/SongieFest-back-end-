import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";

//// testing REGISTER USER
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

const baseUrl = "https://songiefest-be.herokuapp.com/register/";

// take user's email & pw, set user login request, make POST request
// if successfull, dispatch & send payload to our reducer
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    // pass in data w/ POST request, as own object
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    // make post request, destructure data
    // send username & pw, get back a token
    const { data } = await axios.post(
      `${baseUrl}/login`,
      // need to also send our data (email, pw)
      // if we didn't change user model, django expects username which is
      // our email but need to send it as username
      { email: username, password: password },
      config
    );

    // got the data, ready to login user.
    // payload = data we got back from request (basic user data & token)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    // set this data in our state & local storage so we know user is logged in
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  // removes user from localStorage & in our state
  localStorage.removeItem("userInfo");
  // dispatch logout action
  dispatch({ type: USER_LOGOUT });
};

/////////////    TESTING REGISTER USER     \\\\\\\\

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${baseUrl}/register`,
      { name: name, email: email, password: password },
      config
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
