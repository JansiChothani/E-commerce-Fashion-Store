import React from 'react'
import "../Styles/Login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <form className='loginform'>
        Email <input type="email" />
        Password <input type="password" />
        <button>Login</button>
        <p>Don't have an account ? <Link to="/Reg">Signup</Link></p>
      </form>
    </div>
  )
}

export default Login
