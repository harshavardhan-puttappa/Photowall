import React from "react";
import PropTypes from "prop-types";

const Photo = (props) => {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figurecaption>
        <p>{post.description}</p>
      </figurecaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => props.removePhoto(post.id)}
        >
          Remove
        </button>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  removePhoto: PropTypes.func.isRequired,
};

export default Photo;
