import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  const [isLogin, setisLogin] = useState(true);
  return (
    <div className='container'>
      <div className='form-container'>
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ""} onClick={() => setisLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={() => setisLogin(false)}> SignUp</button>
        </div>
        {isLogin ? <>
          <div className="form">
            <h2>Login form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <a href='#'>Forget password</a>
            <button>Login</button>
            <p>Not a Member? <a href='#' onClick={() => setisLogin(false)}>SignUp now</a></p>
          </div>
        </> : <>
        <div className="form">
          <h2>SignUp form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input type='password' placeholder='Confirm Password'></input>
            <button>SignUp</button>
        </div>
        </>}
      </div>
    </div>
  )
}

export default LoginSignup