import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import { SinglePostComponent } from '../components/SinglePostComponent'

export const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})

    const handleGetId = async () => {
        const post = await PostService.get(id)
        setPost(post)
    }

    useEffect(() => {
        handleGetId();
    }, [id])

    return (
        <div>
            <SinglePostComponent
                key={post.id}
                title={post.title}
                text={post.text}
            />
        </div>
    )
}
