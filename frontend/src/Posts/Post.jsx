import { useState, useContext, useRef} from 'react'
import './Post.css'
import {  useNavigate} from 'react-router-dom'
import AuthorAvatar from '../shared/AuthorAvatar/AuthorAvatar';
import {Context} from '../context/Context';
import axios from 'axios';



function Post({data}) {

    console.log(data.comments)
  const {user} = useContext(Context);
  const navigate = useNavigate();

  const [likes, setLikes] = useState(data.likes.length);
  const [liked, setLiked] = useState(data.likes.includes(user._id)); 
  const [commentActive, setCommentActive] = useState(false); 

  const commentRef = useRef();
  
  
  const likePost = async () => {
    if(!user) return;             
    await axios.put(`http://localhost:5000/api/posts/${data._id}/like`, {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.put(`http://localhost:5000/api/posts/${data._id}/comments`, {
        username:user.username,
        comment: commentRef.current.value
    });
    setCommentActive(false);

    console.log(res);
  }
  

  return (
    <div className='post' id={data._id}>
        <div className="post-image">
            <img src={data.image || 'https://cdn.pixabay.com/photo/2020/06/25/22/11/cat-5341054_960_720.jpg'} alt='image-item' />
        </div>    
        <AuthorAvatar username={data.username}/>   
            <div className="post-details">               
                    <h2 className='post-title' onClick={visitPost}>{data.title}</h2>         
                <div className="post-actions">
                    <div className="post-likes">
                    <i className={`post-icon like-icon ${liked ? 'fa-solid' : 'fa-regular'} fa-heart `} onClick={likePost}></i>
                        <span className='like-span'>{likes} {likes==1 ? 'Like' : 'Likes'}</span>
                    </div>
                    <div className="post-comment">
                        <i className="post-icon comment-icon fa-regular fa-comment" onClick={()=> setCommentActive(prevVal=>!prevVal)}></i>
                        <span className='post-span'>{data.comments.length} Comments</span>
                    </div>                                
                </div>  
                {(user && commentActive) ? 
                <div className="add-comment">                        
                    <form className='comment-form' onSubmit={handleSubmit}>
                        <textarea className="form-textarea" placeholder='Add comment' ref={commentRef}></textarea>
                        <button className="btn comment-btn">Add</button>
                    </form>                       
                </div> : ''}
                                 
            </div>        
    </div>
  )
}

export default Post