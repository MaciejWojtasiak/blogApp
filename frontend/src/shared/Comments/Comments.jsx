import React from 'react';
import Comment from '../Comment/Comment';

function Comments({comments, postID}) {
  return (
    <div className='comments'>   
        {comments && comments.map((item, index)=>{       
            return <Comment key={index} userID={item.user} postID={postID} description={item.comment}/>
        })}
    </div>
  )
}

export default Comments