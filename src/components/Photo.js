import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Photo = (props) => {
  const post = props.post;
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figurecaption>
        <p>{post.description}</p>
      </figurecaption>
      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => props.removePhoto(props.index)} // can also pass posts.id to remove a post based on its id
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
