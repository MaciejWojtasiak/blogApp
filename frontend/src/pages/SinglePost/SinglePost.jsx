import {React, useEffect, useState, useContext, useRef} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader';
import UserAvatar from '../../shared/UserAvatar/UserAvatar';
import UpdateForm from '../../shared/UpdateForm/UpdateForm';
import Confirm from '../../shared/Confirm/Confirm';
import Comments from '../../shared/Comments/Comments';
import './SinglePost.css';
import axios from 'axios';
import { Context } from '../../context/Context';

function SinglePost() {

    const {user} = useContext(Context);    
    const [isUpdating, setIsUpdating] = useState(false);
    const [confimationPopUp, setConfimationPopUp] = useState(false);
    const [commentActive, setCommentActive] = useState(false); 
    const [post, setPost] = useState(false);    
    const [comments, setComments] = useState([])
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false); 

    const params = useParams();
    const postID = params.postID;
    const commentRef = useRef();

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get(`https://blog-app-api-hpab.onrender.com/api/posts/${postID}`);
            setPost(res.data);
            setLikes(res.data.likes.length);            
            user && setLiked(res.data.likes.includes(user._id));   
            setComments(res.data.comments);  
        }
        getPost();       
    },[]);

    const likePost = async () => {
        if(!user) return;             
        await axios.put(`https://blog-app-api-hpab.onrender.com/api/posts/${postID}/like`, {
            userId:user._id
        });     
        setLiked(prevVal => !prevVal);
        liked ? setLikes(prevVal => --prevVal) : setLikes(prevVal => ++prevVal);   
      }

    const close = () => {
        setIsUpdating(false);
        setConfimationPopUp(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await axios.put(`https://blog-app-api-hpab.onrender.com/api/posts/${postID}/comments`, {
            user:user._id,
            comment: commentRef.current.value
        });
        setCommentActive(false);
        location.reload();
      }  

    const handleDelete = async () => {
        try {
            await axios.delete(`https://blog-app-api-hpab.onrender.com/api/posts/${postID}`, {
                username:user.username,
            }); 
            location.replace('/');
        } catch (err) {
            console.log(err);
        }           
    }
   
  return (
    <div className='single-post' >
        {!post && <Loader />}
        {isUpdating && <UpdateForm post={post} close={close}/>}
        {(user && post.user === user._id)  && <div className='edit-btn' onClick={()=> {setIsUpdating(true)}}>Edit post</div>}
        {user && post.user === user._id  && <div className='delete-btn' onClick={()=> {setConfimationPopUp(true)}}>Delete post</div>}
        {confimationPopUp && <Confirm handleDelete={handleDelete} close={close}/>}
        {post && 
            <div className={`post  ${(isUpdating || confimationPopUp) && 'blur'}`} id={post._id}>
            {post.image && <div className="post-image">
                <img src={post.image} alt='image-item' />
            </div>}     
            <UserAvatar userID={post.user} />    
                <div className="post-details">                            
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-description'>{post.description}</p>         
                    <div className="post-actions">
                        <div className="post-likes">
                        <i className={`post-icon like-icon ${liked ? 'fa-solid' : 'fa-regular'}  fa-heart`} onClick={likePost}></i>
                        <span className='like-span'>{likes} Reactions</span>
                        </div>
                        <div className="post-comment">
                            <i className="post-icon comment-icon fa-regular fa-comment"  onClick={()=> setCommentActive(prevVal=>!prevVal)}></i>
                            <span className='post-span'>Add comment</span>                            
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
                {comments && <Comments postID = {post._id} comments={comments} />}           
        </div>
        }
        
        
    </div>
  )
}

export default SinglePost