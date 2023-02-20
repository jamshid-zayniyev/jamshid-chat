import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Jamshid Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
// https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load