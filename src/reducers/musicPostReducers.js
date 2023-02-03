import {
  MUSIC_POST_LIST_REQUEST,
  MUSIC_POST_LIST_SUCCESS,
  MUSIC_POST_LIST_FAIL,
} from "../constants/musicPostConstants";

export const musicPostListReducer = (state = { musicPosts: [] }, action) => {
  switch (action.type) {
    case MUSIC_POST_LIST_REQUEST:
      return { loading: true, musicPosts: [] };

    // our state will have a list of music posts if this
    // call is successful
    case MUSIC_POST_LIST_SUCCESS:
      return { loading: false, musicPosts: action.payload };

    case MUSIC_POST_LIST_FAIL:
      // attritbute error, pass in response from our payload
      return { loading: false, error: action.payload };

    // if one of our switch cases doesn't match cases above,
    // return initial state
    default:
      return state;
  }
};
