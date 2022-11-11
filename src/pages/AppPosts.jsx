import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import PostService from '../services/PostService'

export const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  const handelGetPost = async () => {
    const data = await PostService.getAll()
    setPosts(data)
  }

  useEffect(() => {
    handelGetPost()
  }, [])

  return (
    <div>
      <h1>Posts:</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <Link to={`/post/${post.id}`}>View Post</Link>
        </div>
      ))}
    </div>
  )
}
