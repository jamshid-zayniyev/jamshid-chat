import React from 'react'
import Addimg from "../img/addAvatar.png"
const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'>Jamshid Chat</span>
            <span className='title'>Register</span>
            <form>
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