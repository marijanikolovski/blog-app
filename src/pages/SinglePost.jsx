import React, { useState, useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import { SinglePostComponent } from '../components/SinglePostComponent'
import { AddComment } from './AddComment';
import useFormattedDate from '../hooks/useFormattedDate';

export const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const [commentForEdit, setcommentForEdit] = useState({
        text: "",
    });
    const [commentId, setCommentId] = useState(0)
    const formattedDate = useFormattedDate(post.createdAt);

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

    const hendleDeleteComment = async (comentId) => {
        const data = await PostService.deleteComment(comentId);

        setPost({...post, comments: post.comments.filter((comment) => comment.id !== comentId)})
    }

    const hendelGetCommentId = async (comentId) => {
        const data = await PostService.getComment(comentId);
        setcommentForEdit(data)
        setCommentId(comentId)
    }

    return (
        <div>
            <SinglePostComponent
                key={post.id}
                post={post}
                title={post.title}
                text={post.text}
                formattedDate={formattedDate}
                onDeleteComment={hendleDeleteComment}
                getCommnetId={hendelGetCommentId}
            />
            <AddComment
                postId={post.id}
                addCommentFunction={handleAddComment}
                commentId={commentId}
                setcommentForEdit={setcommentForEdit}
                commentForEdit={commentForEdit}
            />
        </div>
    )
}
