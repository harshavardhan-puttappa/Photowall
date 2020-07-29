import { ADD_COMMENT, LOAD_COMMENTS } from "./../actions/types";

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

    case LOAD_COMMENTS:
      return payload;
    default:
      return state;
  }
};

export default commentsReducer;
