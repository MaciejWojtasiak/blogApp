import { useEffect , useState} from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import Header from './shared/Header/Header';
import CreatePost from './pages/CreatePost/CreatePost';
import PostList from './Posts/PostList';
import UserPage from './pages/UserPage/UserPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';


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
      <Routes>      
        <Route path='/' element={<PostList posts={data}/>}/>
        <Route path='/:userID/createPost' element={<CreatePost />}/>
        <Route path='/:userID' element={<UserPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div> 
  </Router>
  )
}

export default App
