import React from "react";
import useForm from "../hooks/useForm";
import Button from "../components/common/Button";

function CreatePost() {
  const { values, handleChange, handleSubmit, resetForm } = useForm(
    {
      title: "",
      content: "",
    },
    (formData) => {
      console.log("Post created:", formData);
      resetForm();
    }
  );

  return (
    <div className="create-post-container">
      <h1>Create a Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title</label>

          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter post title"
            value={values.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Post Content</label>

          <textarea
            id="content"
            name="content"
            placeholder="Share something with the community..."
            value={values.content}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>

        <Button type="submit" variant="primary">
          Publish Post
        </Button>
      </form>
    </div>
  );
}

export default CreatePost;