import React ,{ useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';
import './UserPage.css'
import axios from 'axios';
import PostList from '../../Posts/PostList';

function UserPage() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const userID = useParams().userID;

  useEffect(()=>{
    const getData = async () => {
      try{
        const resUser = await axios.get(`http://localhost:5000/api/users/${userID}`);
        const resPosts = await axios.get('http://localhost:5000/api/posts');
        const postsData = resPosts.data;
        const userPosts = postsData.filter(item => item.user === userID)
        setUser(resUser.data);      
        setPosts(userPosts);
      } catch (err) {
        console.log(err)
      }       
    }
    getData();   
  },[]); 
 
  return (
    <div className='user-page'>
      {user && <div className='user-page-header'><p>Page of the user: <span>{user.username}</span></p><h3>{user.username}'s posts:</h3></div>}
      {posts && <PostList posts={posts}/>}
    </div>
  )
}

export default UserPage