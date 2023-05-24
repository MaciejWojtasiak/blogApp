import { useState, useEffect} from 'react';
import PostList from '../../Posts/PostList';
import Sidebar from '../../shared/Sidebar/Sidebar';
import "./Home.css";


function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const fetchedData = await response.json();    
      setData(fetchedData.posts);
    }
    fetchData();
  },[])
  return (
    <div className='home'>
      <PostList posts={data}/>
      <Sidebar />         
    </div>
  )
}

export default Home