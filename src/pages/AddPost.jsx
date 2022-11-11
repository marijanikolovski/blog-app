import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AddPostComponent } from "../components/AddPostComponent";
import PostService from "../services/PostService";

export const AddPost = () => {
  const { id } = useParams();
  const history = useHistory();
  const [newPost, setNewPost] = useState({
    title: "",
    text: "",
  });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = null;

    if (id) {
      await PostService.edit(id, newPost);
    } else {
      await PostService.add(newPost);
    }
    history.push("/posts");
  };

  const handelResetForm = () =>
    setNewPost({
      title: "",
      text: "",
    });

  const handleEditPost = async () => {
    const data = await PostService.get(id);
    setNewPost(data);
  };

  useEffect(() => {
    if (id) {
      handleEditPost();
    }
  }, [id]);

  return (
    <div>
      <AddPostComponent
        id={id}
        newPost={newPost}
        setNewPost={setNewPost}
        onSubmit={handleOnSubmit}
        onReset={handelResetForm}
      />
    </div>
  );
};
