import React, { useState } from 'react'
import "../Styles/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

  let [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  let navigate = useNavigate();

  let handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        formData
      );

      alert("Login Successful");
      setFormData({ email: "", password: "" });
      navigate("/");

    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  }

  return (
    <div>
      <form className="loginform" onSubmit={handleSubmit}>
        
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/Reg">Signup</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
