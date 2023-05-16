import './Header.css'

function Header() {
  return (
    <header className='header'>
        <div className="header-left">
          <div className="header-logo">
            BlogAPP
          </div>
          <div className="header-search">
            <input type="text" placeholder='Search'/><i className="fa-solid fa-magnifying-glass"></i>
          </div>          
        </div>
        <div className="header-right">
            <button className='header-button post-btn'>Create post</button>
            <div className="header-avatar">
              <img className='avatar' src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="profilePhoto" />
            </div>
        </div>
    </header>
  )
}

export default Header