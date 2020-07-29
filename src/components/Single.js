import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = (props) => {
  const {
    match: {
      params: { id },
    },
    posts,
  } = props;

  const post = posts.find((post) => post.id === Number(id));
  const comments = props.comments;
  return (
    <div className="single-photo">
      <Photo post={post} />
      <Comments addComment={props.addComment} comments={comments} />
    </div>
  );
};

export default Single;
