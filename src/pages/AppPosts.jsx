import React, { useState, useEffect } from 'react'
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
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}
