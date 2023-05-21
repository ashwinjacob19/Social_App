import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className='loginLogo'>LamaSocial</h3>
            <span className='loginDesc'>Connect with friends and the world <br /> around you on  Lamasocial</span>
        </div>
        <dv className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <button className='loginButton'>Login In</button>
                <span className='loginForgot'>Forgot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </div>
        </dv>
      </div>
    </div>
  )
}
