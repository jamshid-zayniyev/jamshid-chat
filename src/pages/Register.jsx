import React, { useState } from 'react'
import Addimg from "../img/addAvatar.png"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
import { async } from '@firebase/util';

const Register = () => {
  const [err,setErr ]= useState(false)
  const handleSubmit= async (e)=>{
    e.preventDefault()
    const diplayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'>Jamshid Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input style={{display:'none'}} type="file" />
                <label htmlFor="file" id='file'>
                  <img src={Addimg} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register