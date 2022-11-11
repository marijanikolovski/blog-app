import React from 'react'

export const SinglePostComponent = ({ title, text }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ text }</p>
        </div>
    )
}
