import React from 'react'
import {Link} from 'react-router-dom'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <h3 className='sidebar-title'>Categories</h3>
      <ul className='sidebar-list'>       
        <li className='list-item'><Link className='link' to={'/posts/music'}>Music</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/sport'}>Sport</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/technology'}>Technology</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/science'}>Science</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/movie'}>Movie</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/politics'}>Politics</Link></li>        
      </ul>
    </div>
  )
}

export default Sidebar