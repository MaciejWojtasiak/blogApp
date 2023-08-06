import { useState, useEffect} from 'react';
import PostList from '../../Posts/PostList';
import Sidebar from '../../shared/Sidebar/Sidebar';
import "./Home.css";
import axios from 'axios';


function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);      
    }
    getPosts();    
  },[])
  return (
    <div className='home'>
      <PostList posts={posts}/>
      <Sidebar />         
    </div>
  )
}

export default Home