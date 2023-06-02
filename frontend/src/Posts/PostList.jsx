import React from 'react';
import Post from './Post';
import "./PostList.css";
import Loader from '../shared/Loader/Loader';


function PostList({posts}) {
    
    if(posts.length === 0) {
        return (<div className='posts-loader center'>
            <Loader />
        </div>)
    }    
    return (
        <div className='post-list'>
            {posts.map((post, index) => <Post key={index} id={post._id} data={post}/>)}
        </div>
    )
}

export default PostList