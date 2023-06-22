import React from 'react';
import Comment from '../Comment/Comment';

function Comments({comments}) {
  return (
    <div className='comments'> 
   
        {comments && comments.map((item, index)=>{
            return <Comment key={index} username={item.username} description={item.comment}/>
        })}
    </div>
  )
}

export default Comments