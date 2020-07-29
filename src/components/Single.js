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
  if (props.loading) {
    return <div className="loader">Loading...</div>;
  } else if (post) {
    return (
      <div className="single-photo">
        <Photo post={post} index={index} {...props} />
        <Comments {...props} comments={comments} id={id} />
      </div>
    );
  } else {
    return <h1>...No posts found</h1>;
  }
};

export default Single;
