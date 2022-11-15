import React from "react";

export const AddComentComponent = ({
    comment,
    setComment,
    onSubmitComment,
    commentId,
    setcommentForEdit,
    commentForEdit,
}) => {
    return (
        <div>
            <form onSubmit={onSubmitComment}>
                <label>Add Comment</label>
                {commentId !== 0 ?
                    <input
                    type='text'
                    placeholder={commentForEdit.text}
                    value={comment.text}
                    onChange={({ target }) => setcommentForEdit({ ...commentForEdit, text: target.value })}
                /> : <input
                type="text"
                value={comment.text}
                onChange={({ target }) => setComment({ ...comment, text: target.value })}
                /> 
                }
                <button>Save</button>
            </form>
        </div>
    );
};