import axios from "axios";
import {
  MUSIC_POST_LIST_REQUEST,
  MUSIC_POST_LIST_SUCCESS,
  MUSIC_POST_LIST_FAIL,
} from "../constants/musicPostConstants";

// action in charge of making api call to get all music posts
// once we get back data, dispatch our musicPostReducer
// which will update our state
// redux Thunk async, make a function within a function

const listMusicPosts = () => async (dispatch) => {
  try {
    dispatch({ type: MUSIC_POST_LIST_REQUEST });

    // home page shows all music posts
    const { data } = await axios.get("/api/home/");

    dispatch({
      type: MUSIC_POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MUSIC_POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? // if we have a custom message (backend) go ahead & return that
            error.response.data.message
          : error.message,
    });
  }
};
