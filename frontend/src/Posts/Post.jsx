import {React, useState, useE} from 'react'
import './Post.css'
import {Link} from 'react-router-dom'
import AuthorAvatar from '../shared/AuthorAvatar/AuthorAvatar';
import { useContext } from 'react';
import {Context} from '../context/Context';
import axios from 'axios';



function Post({data}) {
  const {user} = useContext(Context);

  const [likes, setLikes] = useState(data.likes.length);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  
  
  const likePost = async () => {
    if(!user) return;
    await axios.put(`http://localhost:5000/api/posts/${data._id}/like`, {
        userId:user._id
    });
  }
  

  return (
    <div className='post' id={data._id}>
        <div className="post-image">
            <img src={data.image || 'https://cdn.pixabay.com/photo/2020/06/25/22/11/cat-5341054_960_720.jpg'} alt='image-item' />
        </div>    
        <AuthorAvatar username={data.username}/>   
            <div className="post-details"> 
                <Link className='link' to = {`posts/${data._id}`}>              
                    <h2 className='post-title'>{data.title}</h2>          
                </Link>                    
                <div className="post-actions">
                    <div className="post-likes">
                    <i className={`post-icon like-icon ${liked ? 'fa-solid' : 'fa-regular'} fa-heart `} onClick={likePost}></i>
                        <span className='like-span'>{likes} Reactions</span>
                    </div>
                    <div className="post-comment">
                        <i className="post-icon comment-icon fa-regular fa-comment"></i>
                        <span className='post-span'>Add comment</span>
                    </div>
                    <div className="post-category">
                        <Link className='link' to={`posts/category/${data.category}`}>#{data.category}</Link>                        
                    </div>
                </div>            
            </div>        
    </div>
  )
}

export default Post