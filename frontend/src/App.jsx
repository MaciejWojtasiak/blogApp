import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css'
import Header from './shared/Header/Header';
import CreatePost from './pages/CreatePost/CreatePost';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Register from './pages/Register/Register';
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
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </div> 
  </Router>
  )
}

export default App
