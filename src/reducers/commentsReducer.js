import { ADD_COMMENT } from "./../actions/types";

const commentsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_COMMENT:
      return [...state, payload];
    default:
      return state;
  }
};

export default commentsReducer;
