import {
  REMOVE_PHOTO,
  ADD_PHOTO,
  ADD_COMMENT,
  LOAD_POSTS,
  LOAD_COMMENTS,
} from "./types";
import { database } from "../database/config";

// action creators returning methods which in turn dispatch actions to the reducers. Redux thunk is used to achieve this.
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

// action creators returning actions to the reducers
export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, postId },
  };
}

const loadPosts = (posts) => (dispatch) => {
  dispatch({
    type: LOAD_POSTS,
    payload: posts,
  });
};
const loadComments = (comments) => (dispatch) => {
  dispatch({
    type: LOAD_COMMENTS,
    payload: comments,
  });
};

// actions creators to dispatch methods to dispatch actions to firebase to update the database.
// action creator to add the post to the firebase databse
export const startAddingPost = (post) => (dispatch) => {
  return database
    .ref("posts")
    .update({ [post.id]: post })
    .then(() => {
      dispatch(addPhoto(post));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// action creator to remove the post from the firebase databse
export const startRemovingPost = (index, id) => (dispatch) => {
  return database
    .ref(`posts/${id}`)
    .remove()
    .then(() => {
      dispatch(removePhoto(index));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// action creator to fetch the posts from the firebase databse
export function startLoadingPosts() {
  return (dispatch) => {
    return database
      .ref("posts")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapShot) => {
          posts.push(childSnapShot.val());
        });
        dispatch(loadPosts(posts));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}

// action creator to add the comments to the firebase databse
export const startAddingComment = (comment, postId) => (dispatch) => {
  return database
    .ref(`comments/${postId}`)
    .push(comment)
    .then(() => {
      dispatch(addComment(comment, postId));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// action creator to add the comments to the firebase databse
export const startLoadingComments = () => (dispatch) => {
  return database
    .ref(`comments`)
    .once("value")
    .then((snapshot) => {
      let comments = {};
      snapshot.forEach((childSnapShot) => {
        comments[childSnapShot.key] = Object.values(childSnapShot.val());
      });
      dispatch(loadComments(comments));
    })
    .catch((error) => {
      console.log(error.message);
    });
};
