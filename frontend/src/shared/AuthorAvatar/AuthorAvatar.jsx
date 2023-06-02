
import React from 'react'
import './AuthorAvatar.css'
import UserImage from '../UserImage/UserImage'

function AuthorAvatar({username}) {
  return (
    <div className='post-author'>
              <UserImage userID={1} imageURL={'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'}/>
            <div className="author-username">
               {username}
            </div>
    </div>
  )
}

export default AuthorAvatar