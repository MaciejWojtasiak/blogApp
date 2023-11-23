import { useState, useContext, useEffect} from 'react'
import './Post.css'
import {  useNavigate} from 'react-router-dom'
import UserAvatar from '../shared/UserAvatar/UserAvatar';
import {Context} from '../context/Context';
import axios from 'axios';
import {toast} from 'react-toastify';

function Post({data}) {    
  const {user} = useContext(Context);
  const navigate = useNavigate();
  const [likes, setLikes] = useState(data.likes.length);
  const [liked, setLiked] = useState(false); 

  useEffect(()=>{
    user && setLiked(data.likes.includes(user._id))
   },[])
  
  
  const likePost = async () => {
    if(!user) toast.error('Only logged users can like posts.');             
    await axios.put(`https://blog-app-api-hpab.onrender.com/api/posts/${data._id}/like`, {
        userId:user._id
    });     
    setLiked(prevVal => !prevVal);
    liked ? setLikes(prevVal => --prevVal) : setLikes(prevVal => ++prevVal);   
  }

  const visitPost = () => {
    navigate({
        pathname:`/posts/${data._id}`
    })
  } 

  return (
    <div className='post' id={data._id}>
        <div className="post-image" onClick={visitPost}>
            <img src={data.image || 'https://cdn.pixabay.com/photo/2020/06/25/22/11/cat-5341054_960_720.jpg'} alt='image-item' />
        </div>    
        <UserAvatar userID={data.user} />   
            <div className="post-details">               
                    <h2 className='post-title' onClick={visitPost}>{data.title}</h2>         
                <div className="post-actions">
                    <div className="post-likes">
                    <i className={`post-icon like-icon ${liked ? 'fa-solid' : 'fa-regular'} fa-heart `} onClick={likePost}></i>
                        <span className='like-span'>{likes} {likes==1 ? 'Like' : 'Likes'}</span>
                    </div>
                    <div className="post-comment">
                        <i className="post-icon comment-icon fa-regular fa-comment"></i>
                        <span className='post-span'>{data.comments.length} Comments</span>
                    </div>                                
                </div>                      
            </div>        
    </div>
  )
}

export default Post