import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import { SinglePostComponent } from '../components/SinglePostComponent'
import { AddComment } from './AddComment';

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

    const handleAddComment = (comment) => {
        setPost({ ...post, comments: [...post.comments, comment] });
    };

    return (
        <div>
            <SinglePostComponent
                key={post.id}
                post={post}
                title={post.title}
                text={post.text}
            />
            <AddComment
                postId={post.id}
                addCommentFunction={handleAddComment}
            />
        </div>
    )
}
