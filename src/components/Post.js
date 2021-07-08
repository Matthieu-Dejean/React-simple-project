import React from 'react'

function Post(post) {
    return (
        <div className="posts">
            <h1>Titre : {post.title}</h1>
            <h2>Auteur : {post.auteur}</h2>
            <p>Description : {post.description}</p>
            <li>{post.id} : Ceci est l'id du post.</li>
        </div>
    )
}

export default Post
