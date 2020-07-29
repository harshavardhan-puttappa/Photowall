import { ADD_COMMENT } from "./../actions/types";

const commentsReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_COMMENT:
      if (!state[payload.postId]) {
        return {
          ...state,
          [payload.postId]: [payload.comment],
        };
      }
      return {
        ...state,
        [payload.postId]: [...state[payload.postId], payload.comment],
      };
    default:
      return state;
  }
};

export default commentsReducer;
