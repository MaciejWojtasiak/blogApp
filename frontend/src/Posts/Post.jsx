import React from 'react'
import './Post.css'
import {Link} from 'react-router-dom'

function Post({id,authorID, title,body, reactions, tags, imgURL}) {
  return (
    <div className='post' id={id}>
        {imgURL && <div className="post-image">
            <img src={imgURL} alt='image-item' />
        </div>}        
        <div className="post-author">
            <div className="author-avatar">
                <img src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="author-avatar" />
            </div>
            <div className="author-username">
                Nickname
            </div>
        </div>  
        <Link className='link' to = {`posts/${id}`}>
            <div className="post-details">           
                <h2>{title}</h2>               
                {tags && <div className="post-tags">
                    {tags.map((tag,index)=>{
                        return <span key={index} className='tag'>#{tag}</span>
                    })}
                    </div>}
                <div className="post-actions">
                    <div className="post-likes">
                    <i className="post-icon like-icon fa-regular fa-heart"></i>
                    <span className='like-span'>{reactions} Reactions</span>
                    </div>
                    <div className="post-comment">
                        <i className="post-icon comment-icon fa-regular fa-comment"></i>
                        <span className='post-span'>Add comment</span>
                    </div>
                </div>            
            </div>
        </Link>
    </div>
  )
}

export default Post