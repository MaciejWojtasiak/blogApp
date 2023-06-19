import React from 'react'
import {Link} from 'react-router-dom'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <h3 className='sidebar-title'>Categories</h3>
      <ul className='sidebar-list'>       
        <li className='list-item'><Link className='link' to={'/posts/category/music'}>Music</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/category/sport'}>Sport</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/category/technology'}>Technology</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/category/science'}>Science</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/category/movie'}>Movie</Link></li>
        <li className='list-item'><Link className='link' to={'/posts/category/politics'}>Politics</Link></li>        
      </ul>
    </div>
  )
}

export default Sidebar