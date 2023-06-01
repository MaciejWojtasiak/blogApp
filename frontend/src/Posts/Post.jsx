import React from 'react'
import './Post.css'
import {Link} from 'react-router-dom'
import AuthorAvatar from '../shared/AuthorAvatar/AuthorAvatar'

function Post({id, data}) {
  return (
    <div className='post' id={id}>
        {data.imgURL && <div className="post-image">
            <img src={data.imgURL} alt='image-item' />
        </div>}      
        <AuthorAvatar imageURL='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' username='Andrew Tate'/>   
            <div className="post-details"> 
                <Link className='link' to = {`posts/${data.id}`}>              
                    <h2 className='post-title'>{data.title}</h2>          
                </Link>     
                {data.tags && <div className="post-tags">
                    {data.tags.map((tag,index)=>{
                        return <span key={index} className='tag'>#{tag}</span>
                    })}
                    </div>}
                <div className="post-actions">
                    <div className="post-likes">
                    <i className="post-icon like-icon fa-regular fa-heart"></i>
                    <span className='like-span'>{data.reactions} Reactions</span>
                    </div>
                    <div className="post-comment">
                        <i className="post-icon comment-icon fa-regular fa-comment"></i>
                        <span className='post-span'>Add comment</span>
                    </div>
                </div>            
            </div>        
    </div>
  )
}

export default Post