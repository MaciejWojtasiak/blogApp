import { useState, useEffect} from 'react';
import PostList from '../../Posts/PostList';
import Sidebar from '../../shared/Sidebar/Sidebar';
import "./Home.css";
import axios from 'axios';
import Loader from '../../shared/Loader/Loader';


function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const getPosts = async () => {
      setIsLoading(true);
      const res = await axios.get('https://blog-app-api-hpab.onrender.com/api/posts');
      setPosts(res.data);  
      setIsLoading(false);    
    }
    getPosts();    
  },[])
  return (
    <div className='home'>
      {isLoading? <Loader /> : <PostList posts={posts}/>}      
      <Sidebar />         
    </div>
  )
}

export default Home