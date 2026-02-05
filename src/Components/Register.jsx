import React, { useState } from 'react'
import "../Styles/Regiter.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {

    let [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
        age: "",
        city: "",
        phone_no: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/register", formdata);
            alert("Successfully Registered");
            setformdata({
                firstname: "",
                lastname: "",
                age: "",
                city: "",
                phone_no: "",
                email: "",
                password: ""
            })
            navigate("/Login");
        } catch (error) {
            console.log("Registration Failed",error);
            alert("Somthing went wrong...")
        }
    }

    return (
        <div>
            <form className='regform' onSubmit={handlesubmit}>
                First Name <input type="text" name="firstname" onChange={handlechange} required />
                Last Name <input type="text" name="lastname" onChange={handlechange} required />
                Age <input type="number" name="age" onChange={handlechange} required />
                City <input type="text" name="city" onChange={handlechange} required />
                Contact Number <input type="number" name="phone_no" onChange={handlechange} required />
                Email <input type="email" name='email' onChange={handlechange} required />
                Password <input type="password" name='password' onChange={handlechange} required />
                <button>Register</button>
                <p>Already have an account.... <Link to="/Login">Login</Link></p>
            </form>
        </div>
    )
}

export default Register
