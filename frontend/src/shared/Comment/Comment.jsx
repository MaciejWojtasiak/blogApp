import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './Comment.css';

function Comment({userID, description}) { 
  return (
    <div className='comment'>    
        <UserAvatar userID={userID} />  
        <div className="comment-description">
           <p>{description}</p>
        </div>
    </div>
  )
}

export default Comment