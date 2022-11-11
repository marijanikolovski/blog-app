import React from "react";

export const AddPostComponent = ({ 
    id,
    newPost, 
    setNewPost, 
    onSubmit,
    onReset
 }) => {
  return (
    <div>
      <h1>{id ? 'Edit post' : 'Create New Post'}</h1>
      <form onSubmit={onSubmit}>
        <label>Input title</label>
        <input
          required
          minLength={2}
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={({ target }) =>
            setNewPost({ ...newPost, title: target.value })
          }
        />
        <label>Input text</label>
        <textarea
          required
          type="text"
          maxLength={300}
          placeholder="Text"
          value={newPost.text}
          onChange={({ target }) =>
            setNewPost({ ...newPost, text: target.value })
          }
        />
        <button type="submit">{id ? 'Edit' : "Add New Post"}</button>
        <button 
            type="submit"
            onClick={onReset}
        >
            Reset
        </button>
      </form>
    </div>
  );
};
