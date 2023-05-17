import { useEffect , useState} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import Header from './Header/Header';
import CreatePost from './pages/CreatePost';
import PostList from './Posts/PostList';
import UserPage from './pages/UserPage';

function App() {

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
  <Router>
    <div className='App'>      
      <Header />   
      <main className='main'>     
      <Routes>      
        <Route path='/' element={<PostList posts={data}/>}/>
        <Route path='/:userID/createPost' element={<CreatePost />}/>
        <Route path='/:userID' element={<UserPage />}/>
      </Routes>
      </main>
    </div> 
  </Router>
  )
}

export default App
