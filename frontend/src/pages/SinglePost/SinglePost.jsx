import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/Loader/Loader';
import AuthorAvatar from '../../shared/AuthorAvatar/AuthorAvatar';
import './SinglePost.css'

function SinglePost() {

    const [post, setPost] = useState(false)
    const params = useParams();
    const postID = params.postID;

    useEffect(()=>{
        const fetchPost = async () => {
            const response = await fetch(`https://dummyjson.com/posts/${postID}`)
            const data = await response.json();
            setPost(data);
            console.log(data)
        }
        fetchPost()
    },[])


    
  return (
    <div className='single-post'>
        {!post && <Loader />}
        {post && 
            <div className='post' id={postID}>
            {post.imgURL && <div className="post-image">
                <img src={post.imgURL} alt='image-item' />
            </div>}      
            {!post.imgURL && <div className="post-image">
                <img src='https://cdn.pixabay.com/photo/2020/06/25/22/11/cat-5341054_960_720.jpg' alt='image-item' />
            </div>} 
            <AuthorAvatar imageURL='https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' username='Andrew Tate'/>   
                <div className="post-details">                            
                        <h2 className='post-title'>{post.title}</h2>
                        <p className='post-description'>{post.body}</p>         
                    <div className="post-actions">
                        <div className="post-likes">
                        <i className="post-icon like-icon fa-regular fa-heart"></i>
                        <span className='like-span'>{post.reactions} Reactions</span>
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