import { useRef, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from "axios";
import "./Login.css";
import { Context } from '../../context/Context';


function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {dispatch} = useContext(Context);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post('https://blog-app-api-hpab.onrender.com/api/auth/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      });    
      
      if(res) {
        navigate('/');
        dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        toast.success('User logged in.');
      }     
   
    } catch (err) {
      setError(err.response.data.error);
      dispatch({type:"LOGIN_ERROR"});
      toast.error('Wrong credentials.')
    }
  }

 
  return (
    <div className='login-page'>       
        <h1>Login</h1>
        <form className='login-form'  onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="username">Username</label>
              <input ref={usernameRef} className='form-input' name='username' id='username' type="text" placeholder='Username' />
              <label htmlFor="password">Password</label>             
              <input ref={passwordRef} className='form-input' name='password' id='password' type="password" placeholder='Password' />
              <button  type="submit" className='btn btn-primary'>Log In</button>              
              {error && <div className='error-message'>{error}</div>}
            </div>
        </form>
        
    </div>
  )
}

export default Login