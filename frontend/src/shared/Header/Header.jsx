import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState} from 'react'
import { Context } from '../../context/Context';

function Header() {
  const navigate = useNavigate();
  const {user, dispatch} = useContext(Context); 
  const [search, setSearch] = useState('');

  const logout = () => {
    dispatch({type:"LOGOUT"});
    console.log('logged out');
    window.location.reload();
  }
  

  const handleSearch = () => {
    navigate({
      pathname:`/search/${search}`,
    })
    setSearch('')
  }
  const handleKeyDown = (e) => {
    if(e.key=='Enter') handleSearch();
  }  

  return (
    <header className='header'>
        <div className="header-left">
          <Link className='link' to={'/'}>
            <div className="header-logo">BlogAPP</div>
          </Link>  
          <div className="header-search">
            <input type="text" placeholder='Search post or user' value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleKeyDown}/><i className="fa-solid fa-magnifying-glass search-btn" onClick={handleSearch} ></i>
          </div>          
        </div>
        <div className="header-right">
          {user && <>
            <Link to={`/${user._id}/createPost`} className='header-button btn btn-primary link'>Create post</Link>
            <div className="header-avatar">
              <img src={user.profilePic != '' ?  user.profilePic : 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' } alt="userImage" />
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