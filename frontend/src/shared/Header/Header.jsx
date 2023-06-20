import './Header.css'
import { Link } from 'react-router-dom'
import UserImage from '../UserImage/UserImage'
import { useContext, useState} from 'react'
import { Context } from '../../context/Context';


function Header() {

  const {user, dispatch} = useContext(Context); 
  const [search, setSearch] = useState('');
  const logout = () => {
    dispatch({type:"LOGOUT"});
    window.location.reload();
  }

    return (
    <header className='header'>
        <div className="header-left">
          <Link className='link' to={'/'}>
            <div className="header-logo">BlogAPP</div>
          </Link>  
          <div className="header-search">
            <input type="text" placeholder='Search post or user' value={search} onChange={(e)=>setSearch(e.target.value)} /><Link className='link' to={`/posts/search/${search}`}><i className="fa-solid fa-magnifying-glass search-btn"></i></Link>
          </div>          
        </div>
        <div className="header-right">
          {user && <>
            <Link to={`/${user._id}/createPost`} className='header-button btn btn-primary link'>Create post</Link>
            <div className="header-avatar">
              <UserImage userID={user._id} imageURL={user.imageURL}/>
            </div>
            <div className="logout" onClick={logout}>Logout</div>
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