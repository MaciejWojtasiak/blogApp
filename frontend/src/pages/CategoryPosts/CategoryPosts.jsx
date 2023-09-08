import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../../Posts/PostList';
import Sidebar from '../../shared/Sidebar/Sidebar';
import "./CategoryPosts.css";
import axios from 'axios';


function CategoryPosts() {
  const [categoryPosts, setcategoryPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {category} = useParams();

  useEffect(()=>{
    setIsLoading(true);    
    const getPosts = async () => { 
      const res = await axios.get(`https://blog-app-api-hpab.onrender.com/api/posts/category/${category}`);
      setcategoryPosts(res.data);
    }
    getPosts();   
    setIsLoading(false);    
  },[category])
 
  return (
    <div className='category'>
        <PostList posts={categoryPosts} isLoading={isLoading}/>  
      <Sidebar />         
    </div>
  )
}

export default CategoryPosts