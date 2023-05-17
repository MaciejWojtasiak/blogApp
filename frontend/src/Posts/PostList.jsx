import React from 'react'
import Post from './Post'
import "./PostList.css"

function PostList({posts}) {
    if(posts.length === 0) {
        return (<div className='center'>
            No data yet...
        </div>)
    }
    console.log(posts)
    
    return (
        <div className='post-list'>
            {posts.map(post=> <Post key={post.id} id={post.id} imgURL="https://cdn.pixabay.com/photo/2020/06/25/22/11/cat-5341054_960_720.jpg" authorID={post.userId} title={post.title} body={post.body} reactions={post.reactions} tags={post.tags}/>)}
        </div>
    )
}

export default PostList