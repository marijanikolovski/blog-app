import React from 'react'

export const SinglePostComponent = ({ title, text, post }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ text }</p>
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
