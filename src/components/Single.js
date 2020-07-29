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
  const comments = props.comments[id] || [];
  const index = posts.findIndex((post) => post.id === Number(id));
  return (
    <div className="single-photo">
      <Photo post={post} index={index} comments={props.comments} />
      <Comments addComment={props.addComment} comments={comments} id={id} />
    </div>
  );
};

export default Single;
