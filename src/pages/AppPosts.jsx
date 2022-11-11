import React, { useState, useEffect } from 'react'
import { Link, useHistory } from "react-router-dom";
import PostService from '../services/PostService'

export const AppPosts = () => {
  const history = useHistory()
  const [posts, setPosts] = useState([]);

  const handelGetPost = async () => {
    const data = await PostService.getAll()
    setPosts(data)
  }

  useEffect(() => {
    handelGetPost()
  }, [])

  const hendleDeletePost = async (id) => {
    await PostService.delete(id);

    const data = await PostService.getAll();
    setPosts(data);
  }

  return (
    <div>
      <h1>Posts:</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <div>
            {post.comments && post.comments.length ? (
              <span>Number of comments: {post.comments.length}</span>
            ) : (
              <span>No comments</span>
            )}
          </div>
          <Link to={`/post/${post.id}`}>View Post</Link>
          <button type='submit' onClick={() => history.push(`/edit/${post.id}`)}>Edit</button>
          <button type='submit' onClick={() => hendleDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
