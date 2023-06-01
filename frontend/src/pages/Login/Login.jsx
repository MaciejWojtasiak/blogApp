import {React, useState, useEffect} from 'react';
import axios from "axios";
import "./Login.css"


function Login() {
  const [formData, setFormData] = useState({
    username:'',
    password:''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData(prevVal => ({
      ...prevVal,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: formData.username,
        password: formData.password
      });      
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className='login-page'>     
        <h1>Login</h1>
        <form className='login-form' action="#" onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="username">Username</label>
              <input onChange={handleChange} className='form-input' name='username' id='username' type="text" placeholder='Username' value={formData.username}/>
              <label htmlFor="password">Password</label>             
              <input onChange={handleChange} className='form-input' name='password' id='password' type="password" placeholder='Password' value={formData.password}/>
              <input className='btn btn-primary' type="submit" placeholder='login'/>
            </div>
        </form>
        {message && <div>{message}</div>}
    </div>
  )
}

export default Login