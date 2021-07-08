import React from 'react'
import { AllData } from './AllData'
import Post from './Post'

function PostList() {
    return (
        <div>
            {AllData.posts.map((postDetail, id) => (
                <Post
                key={id}
                id={postDetail.id}
                title={postDetail.title}
                auteur={postDetail.authorId === 1 ? AllData.authors[0].name : AllData.authors[1].name}
                description={postDetail.description}
                />
            ))}
        </div>
    )
}

export default PostList