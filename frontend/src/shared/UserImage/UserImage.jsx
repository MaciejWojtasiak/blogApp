import React from 'react'
import { Link } from 'react-router-dom'
import './UserImage.css'

function UserImage({userID, imageURL}) {
  return (
    <Link className='user-image' to={`/${userID}`}>
        <img className='avatar' src={imageURL} alt="profilePhoto" />
    </Link>
  )
}

export default UserImage