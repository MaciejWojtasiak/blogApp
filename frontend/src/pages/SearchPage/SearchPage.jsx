import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../../Posts/PostList';
import Sidebar from '../../shared/Sidebar/Sidebar';
import axios from 'axios';
import './SearchPage.css'


function SearchPage() {
  const {query} = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const getPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      const posts = res.data;
      const filteredItems = posts.filter(item=>{
        const desc = item.description.toLowerCase();
        const title = item.title.toLowerCase();  

        return desc.includes(query.toLowerCase()) || title.includes(query.toLowerCase());        
      });
      setPosts(filteredItems);
    }
    getPosts();    
  },[query])
  return (
    <div className='search-page'>
      <PostList posts={posts}/>
      <Sidebar />         
    </div>
  )
}

export default SearchPage