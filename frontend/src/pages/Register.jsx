import {React, useState} from 'react'
import './Register.css'


const handleSubmit = (e) => {
  e.preventDefault();
}

function Register() {
  return (
    <div className='register-page'>     
        <h1>Register new account</h1>
        <form className='register-form' action="#" onSubmit={handleSubmit}>
            <div className="form-div">
              <label htmlFor="username">Username</label>
              <input className='form-input' name='username' id='username' type="text" placeholder='Username' />
              <label htmlFor="mail">Email</label>
              <input className='form-input' name='mail' id='mail' type="mail" placeholder='Email' />
              <label htmlFor="password">Password</label>
              <input className='form-input' name='password' id='password' type="password" placeholder='Password' />
              <label htmlFor="password-check">Repeat password</label>
              <input className='form-input' name='password-check' id='password-check' type="password" placeholder='Repeat password' />
              <input className='btn btn-primary' type="submit" placeholder='Register'/>
            </div>
        </form>
    </div>
  )
}

export default Register