import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Header from './shared/Header/Header';
import CreatePost from './pages/CreatePost/CreatePost';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Register from './pages/Register/Register';
import SinglePost from './pages/SinglePost/SinglePost';
import CategoryPosts from './pages/CategoryPosts/CategoryPosts';
import SearchPage from './pages/SearchPage/SearchPage';
import Login from './pages/Login/Login';

function App() {   
  return (  
      <Router>
        <div className='App'>      
          <Header />   
          <Routes>      
            <Route path='/' element={<Home />}/>
            <Route path='/:userID/createPost' element={<CreatePost />}/>
            <Route path='/:userID' element={<UserPage />}/>
            <Route path='/posts/:postID' element={<SinglePost />} />
            <Route path='/posts/category/:category' element={<CategoryPosts />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/search/:query' element={<SearchPage />}/>
          </Routes>
          <ToastContainer />
        </div> 
      </Router>
  )
}

export default App
