import React from "react";

const Comments = (props) => {
  const { comments, addComment } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    comment && addComment(comment);
    var frm = document.getElementsByName("comments-form")[0]; // to reset the form after submission
    frm.reset();
  };
  return (
    <div className="comment">
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <form
        onSubmit={handleSubmit}
        className="comment-form"
        name="comments-form"
      >
        <input type="text" placeholder="comment" name="comment" />
        <input type="submit" value="Submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
