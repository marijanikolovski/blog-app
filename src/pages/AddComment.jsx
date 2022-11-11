import React, { useState } from "react";
import PostService from "../services/PostService";
import { AddComentComponent } from "../components/AddComentComponent";

export const AddComment = ({ postId, addCommentFunction }) => {
    const [comment, setComment] = useState({
        text: "",
    });

    const handleAddComment = async (e) => {
        e.preventDefault();
        const data = await PostService.addComment(comment, postId);
    
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
                onSubmitComment={handleAddComment}
            />
        </div>
    );
};
