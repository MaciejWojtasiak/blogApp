import {React, useRef, useState, useContext} from 'react';
import axios from "axios";
import "./Login.css";
import { Context } from '../../context/Context';


function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const {isFetching, dispatch} = useContext(Context);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    setError('');
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      });    
      
      if(res) {
        location.replace('/');
        dispatch({type:"LOGIN_SUCCESS", payload:res.data})
      }     
   
    } catch (err) {
      setError(err.response.data.error);
      dispatch({type:"LOGIN_ERROR"})
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
              <input className='btn btn-primary' type="submit" placeholder='login'/>
              {error && <div className='error-message'>{error}</div>}
            </div>
        </form>
        
    </div>
  )
}

export default Login