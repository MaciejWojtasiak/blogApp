import './Header.css'
import { Link } from 'react-router-dom'
import UserImage from '../shared/UserImage'
function Header() {
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
            <Link to={'/:userID/createPost'} className='header-button post-btn link'>Create post</Link>
            <div className="header-avatar">
              <UserImage userID={1} imageURL={'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg'}/>
            </div>
        </div>
    </header>
  )
}

export default Header