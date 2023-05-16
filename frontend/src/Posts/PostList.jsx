import React from 'react'
import Post from './Post'

function PostList({posts}) {
    console.log(posts)
    if(posts.length === 0) {
        return (<div className='center'>
            No data yet...
        </div>)
    }
    
    return (
        <div className='post-list'>
            {posts.map(post=> <Post key={post.id} id={post.id} title={post.title} body = {post.body}/>)}
        </div>
    )
}

export default PostList