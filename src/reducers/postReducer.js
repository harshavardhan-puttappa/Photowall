import posts from "../data/posts";
import { REMOVE_PHOTO, ADD_PHOTO } from "./../actions/types";

const initialState = {
  posts: posts,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_PHOTO:
      return {
        ...state,
        posts: state.posts.filter((post, index) => index !== payload), // can also filter the posts based on the posts id
      };
    case ADD_PHOTO:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    default:
      return state;
  }
};

export default postReducer;
