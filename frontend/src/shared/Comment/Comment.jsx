import React from 'react'

function Comment({username, description}) {
  return (
    <div className='comment'>
        <div className="comment-user">
            {username}
        </div>
        <div className="comment-description">
            {description}
        </div>
    </div>
  )
}

export default Comment