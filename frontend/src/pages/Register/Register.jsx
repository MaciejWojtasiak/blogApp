import {React, useRef, useState} from 'react';
import axios from 'axios';
import './Register.css'






function Register() {

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatRef = useRef();

  const [message, setMessage] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(``);

    if(passwordRef.current.value != repeatRef.current.value) {
      setMessage(`Passwords doesn't match!`);
      return;
    }
   
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username:usernameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
      })
      res && window.location.replace('/login');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='register-page'>     
        <h1>Register new account</h1>
        <form className='register-form' action="#" onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="username">Username</label>
              <input ref={usernameRef} className='form-input' name='username' id='username' type="text" placeholder='Username' />
              <label htmlFor="mail">Email</label>
              <input ref={emailRef} className='form-input' name='mail' id='mail' type="mail" placeholder='Email' />
              <label htmlFor="password">Password</label>
              <input ref={passwordRef} className='form-input' name='password' id='password' type="password" placeholder='Password' />
              <label htmlFor="password-check">Repeat password</label>
              <input ref={repeatRef} className='form-input' name='password-check' id='password-check' type="password" placeholder='Repeat password' />
              {message && <div className='password-message'>{message}</div>}
              <input className='btn btn-primary' type="submit" placeholder='Register'/>
            </div>
        </form>
      
    </div>
  )
}

export default Register