import { useState, useEffect} from 'react'
import PostList from '../../Posts/PostList'
import Sidebar from '../../shared/Sidebar/Sidebar'
import Rightbar from '../../shared/Rightbar/Rightbar'
import "./Home.css"


function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('https://dummyjson.com/posts')
      const fetchedData = await response.json();    
      setData(fetchedData.posts)
    }
    fetchData();
  },[])
  return (
    <div className='home'>
      <Sidebar />
      <PostList posts={data}/>
      <Rightbar />
    </div>
  )
}

export default Home