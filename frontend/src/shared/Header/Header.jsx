import './Header.css'
import { Link } from 'react-router-dom'
import UserImage from '../UserImage/UserImage'
import { useContext} from 'react'
import { Context } from '../../context/Context'

function Header() {

  const {user} = useContext(Context); 

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
            <Link to={`/${user._id}/createPost`} className='header-button btn btn-primary link'>Create post</Link>
            <div className="header-avatar">
              <UserImage userID={user._id} imageURL={user.imageURL}/>
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