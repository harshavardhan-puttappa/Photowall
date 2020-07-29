import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const Photo = (props) => {
  const { post, comments } = props;
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
          onClick={() => {
            props.startRemovingPost(props.index, post.id);
            // props.removePhoto(props.index); // can also pass posts.id to remove a post based on its id
            props.history.push("/");
          }}
        >
          Remove
        </button>
        <Link to={`/single/${post.id}`} className="button">
          <div className="comment-count">
            <div className="speech-bubble"></div>
            {comments[post.id] ? comments[post.id].length : 0}
          </div>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
  removePhoto: PropTypes.func.isRequired,
};

export default withRouter(Photo);
