import React from 'react'

export const SinglePostComponent = ({ 
    title, 
    text, 
    post,
    formattedDate
 }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ text }</p>
            <p>Created at: {formattedDate}</p>
            <h4>Coments:</h4>
            {post.comments && post.comments.length ? (
                <ul>
                    {post.comments.map((comment) => (
                        <li key={comment.id}>{comment.text}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments</p>
            )}

        </div>
    )
}
