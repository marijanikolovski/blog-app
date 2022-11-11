import React, { useState } from "react";
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

  const hendleAddPost = async (e) => {
    e.preventDefault();
    await PostService.add(newPost);
    history.push("/posts");
  };

  const handelResetForm = () => 
    setNewPost ({
    title: '',
    text: ''
  })

  return (
    <div>
      <AddPostComponent
        newPost={newPost}
        setNewPost={setNewPost}
        onSubmit={hendleAddPost}
        onReset={handelResetForm}
      />
    </div>
  );
};
