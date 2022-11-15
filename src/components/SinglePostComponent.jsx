import React from 'react'

export const SinglePostComponent = ({ 
    title, 
    text, 
    post,
    formattedDate,
    onDeleteComment,
    getCommnetId,
    onClickComment,
 }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ text }</p>
            <p>Created at: {formattedDate}</p>
            <h4>Coments:</h4>
            {post.comments && post.comments.length ? (
                <div>
                <h2>Comments:</h2>
                <div>
                    {post.comments.map((comment) => (
                        < div key={comment.id} >
                            <p key={comment.id} onClick={() => onClickComment(comment.id)}>{comment.text}</p>
                            <button onClick={() => onDeleteComment(comment.id)}>Remowe</button>
                            <button onClick={() => getCommnetId(comment.id)}>Edit</button>
                        </div>
                    ))}
                </div>
            </div>
            ) : (
                <p>No comments</p>
            )}

        </div>
    )
}



