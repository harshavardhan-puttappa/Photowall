import { REMOVE_PHOTO, ADD_PHOTO, ADD_COMMENT } from "./types";

export const removePhoto = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_PHOTO,
    payload: id,
  });
};

export const addPhoto = (newPhoto) => (dispatch) => {
  dispatch({
    type: ADD_PHOTO,
    payload: newPhoto,
  });
};

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
}
