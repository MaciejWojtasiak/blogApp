
import React from 'react'
import { Link } from 'react-router-dom'
import './UserAvatar.css'

function UserAvatar({username}) {
  return (
    <div className='post-author'>
              <Link className='user-image' to={`/${username}`}>
                  <img className='avatar' src={username||'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'} alt="profilePhoto" />
              </Link>
            <div className="author-username">
               {username}
            </div>
    </div>
  )
}

export default UserAvatar