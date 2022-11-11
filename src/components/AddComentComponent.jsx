import React from "react";

export const AddComentComponent = ({
    comment,
    setComment,
    onSubmitComment
}) => {
    return (
        <div>
            <form onSubmit={onSubmitComment}>
                <label>Add Comment</label>
                <input
                    required
                    type="text"
                    value={comment.text}
                    onChange={({ target }) =>
                        setComment({ ...comment, text: target.value })
                    }
                />
                <button>Add Commnet</button>
            </form>
        </div>
    );
};
