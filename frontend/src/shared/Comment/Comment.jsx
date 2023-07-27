import React , {useContext}from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import './Comment.css';
import { Context } from '../../context/Context';



function Comment({userID, description}) {  
  
  const {user} = useContext(Context);

  const handleDelete = () => {
    console.log(userID)
  }

  return (
    <div className='comment'>
      {(user._id === userID) && <button className='btn delete-btn' onClick={handleDelete}>x</button>}
        <UserAvatar userID={userID} />  
        <div className="comment-description">
           <p>{description}</p>
        </div>
    </div>
  )
}

export default Comment