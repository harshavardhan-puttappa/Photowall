import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhotoWall = (props) => {
  return (
    <>
      <Link to="./AddPhoto" className="addIcon"></Link>
      <div className="photo-grid">
        {props.posts
          .sort((x, y) => {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={post.id}
              post={post}
              removePhoto={props.removePhoto}
              index={index}
            />
          ))}
      </div>
    </>
  );
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  removePhoto: PropTypes.func.isRequired,
};

export default PhotoWall;
