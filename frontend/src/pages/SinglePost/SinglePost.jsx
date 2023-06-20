import {React, useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader';
import AuthorAvatar from '../../shared/AuthorAvatar/AuthorAvatar';
import UpdateForm from '../../shared/UpdateForm/UpdateForm';
import Confirm from '../../shared/Confirm/Confirm';
import './SinglePost.css';
import axios from 'axios';
import { Context } from '../../context/Context';

function SinglePost() {

    const [isUpdating, setIsUpdating] = useState(false);
    const [confimationPopUp, setConfimationPopUp] = useState(false);
    const [post, setPost] = useState(false);
    const {user} = useContext(Context);    

    const params = useParams();
    const postID = params.postID;

    useEffect(()=>{
        const getPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/posts/${postID}`);
            setPost(res.data);
        }
        getPost();
    },[]);

    const close = () => {
        setIsUpdating(false);
        setConfimationPopUp(false);
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${postID}`, {
                data: {username:user.username},
            }); 
            window.location.replace('/');
        } catch (err) {
            console.log(err);
        }           
    }
    
   
  return (
    <div className='single-post' >
        {!post && <Loader />}
        {isUpdating && <UpdateForm post={post} close={close}/>}
        {post.username === user.username  && <div className='edit-btn' onClick={()=> {setIsUpdating(true)}}>Edit post</div>}
        {post.username === user.username  && <div className='delete-btn' onClick={()=> {setConfimationPopUp(true)}}>Delete post</div>}
        {confimationPopUp && <Confirm handleDelete={handleDelete} close={close}/>}
        {post && 
            <div className={`post  ${(isUpdating || confimationPopUp) && 'blur'}`} id={post._id}>
            {post.image && <div className="post-image">
                <img src={post.image} alt='image-item' />
            </div>}     
            <AuthorAvatar imageURL='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' username={post.username}/>   
                <div className="post-details">                            
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-description'>{post.description}</p>         
                    <div className="post-actions">
                        <div className="post-likes">
                        <i className="post-icon like-icon fa-regular fa-heart"></i>
                        <span className='like-span'>{post.likes.length} Reactions</span>
                        </div>
                        <div className="post-comment">
                            <i className="post-icon comment-icon fa-regular fa-comment"></i>
                            <span className='post-span'>Add comment</span>
                        </div>
                    </div>            
                </div>        
        </div>
        }
        
        
    </div>
  )
}

export default SinglePost