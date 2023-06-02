import React from 'react'
import { Link } from 'react-router-dom'
import './UserImage.css'

function UserImage({userID, imageURL}) {
  return (
    <Link className='user-image' to={`/${userID}`}>
        <img className='avatar' src={imageURL||'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'} alt="profilePhoto" />
    </Link>
  )
}

export default UserImage