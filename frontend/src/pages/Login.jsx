import {React, useState} from 'react'
import "./Login.css"

const handleSubmit = (e) => {
  e.preventDefault();
}

function Login() {
  return (
    <div className='login-page'>     
        <h1>Login</h1>
        <form className='login-form' action="#" onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="username">Username</label>
              <input className='form-input' name='mail' id='mail' type="mail" placeholder='Email' />
              <label htmlFor="password">Password</label>             
              <input className='form-input' name='password-check' id='password-check' type="password" placeholder='Repeat password' />
              <input className='btn btn-primary' type="submit" placeholder='login'/>
            </div>
        </form>
    </div>
  )
}

export default Login