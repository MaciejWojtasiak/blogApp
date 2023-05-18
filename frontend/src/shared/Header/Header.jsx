import './Header.css'
import { Link } from 'react-router-dom'
import UserImage from '../UserImage/UserImage'
import { useEffect, useState } from 'react'

const DUMMY_USER = {
  id:'u1',
  username:'user1',
  password:'password',
  imageURL:'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'
}

function Header() {
  const [user, setUser] = useState(DUMMY_USER)

   return (
    <header className='header'>
        <div className="header-left">
          <Link className='link' to={'/'}>
            <div className="header-logo">BlogAPP</div>
          </Link>  
          <div className="header-search">
            <input type="text" placeholder='Search'/><i className="fa-solid fa-magnifying-glass"></i>
          </div>          
        </div>
        <div className="header-right">
          {user && <>
            <Link to={`/${user.id}/createPost`} className='header-button btn btn-primary link'>Create post</Link>
            <div className="header-avatar">
              <UserImage userID={user.id} imageURL={user.imageURL}/>
            </div>
          </>}

          {!user && 
            <div className='header-links'>
              <Link className='link' to={'/login'}>Login</Link>
              <Link className='link' to={'/register'}>Register</Link>
            </div>
          }
            
        </div>
    </header>
  )
}

export default Header