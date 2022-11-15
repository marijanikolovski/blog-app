import React, { useState } from "react";
import PostService from "../services/PostService";
import { AddComentComponent } from "../components/AddComentComponent";

export const AddComment = ({ 
    postId, 
    addCommentFunction, 
    commentId, 
    setcommentForEdit, 
    commentForEdit,
}) => {
    const [comment, setComment] = useState({
        text: "",
    });


    const handleOnSubmitComment = async (e) => {
        e.preventDefault();
        const data = {};

        if(comment.id) {
            const data = await PostService.editComment(comment.id, comment)
        } else {
            const data = await PostService.addComment(comment, postId);
        }
        
        if (data) {
            addCommentFunction(data);
        }
        setComment({ text: '' });
    };

    return (
        <div>
            <AddComentComponent
                comment={comment}
                setComment={setComment}
                onSubmitComment={handleOnSubmitComment}
                commentId={commentId}
                setcommentForEdit={setcommentForEdit}
                commentForEdit={commentForEdit}
            />
        </div>
    );
};
