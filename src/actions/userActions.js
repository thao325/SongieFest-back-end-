import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";


// take user's email & pw, set user login request, make POST request
// if successfull, dispatch & send payload to our reducer

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    // pass in data w/ POST request, as own object
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    // make post request, destructure data
    // send username & pw, get back a token 
    const {data} = await axios.post(
      '/api/users/login'
      // need to also send our data (email, pw)
      // if we didn't change user model, django expects username which is
      // our email but need to send it as username 
      { 'username': email, 'password': password },
      config
      
      )

      // got the data, ready to login user. 
      // payload = data we got back from request (basic user data & token)
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data
      })
// set this data in our state & local storage so we know user is logged in
      localStorage.setItem('userInfo', JSON.stringify(data))

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
