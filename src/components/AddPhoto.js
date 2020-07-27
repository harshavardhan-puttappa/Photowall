import React from "react";

const AddPhoto = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const newPhoto = {
      id: Number(new Date()),
      imageLink: imageLink,
      description: description,
    };
    props.addPhoto(newPhoto);
  };
  return (
    <div>
      <h1>Add the photo</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input type="text" name="link" placeholder="Link" />
          <input type="text" name="description" placeholder="Description" />
          <button> Add Photo</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
