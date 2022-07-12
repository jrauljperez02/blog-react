import React from 'react'
import './UserForm.css'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const UserForm = () => {
  return (
    <Router>
    <div className = 'container'>
        <div className='contMain'>
        <h2>Contact me!</h2>
        <form action=''>
            <div className='contUser'>
                <input type = 'text' />
                <label for = "name">Name</label>
            </div>
            <div className='contUser'>
                <input type = 'text'/>
                <label for = 'feedback'>Email</label>
            </div>
            <div className='contUser'>
                <input type = 'text'/>
                <label for = 'feedback'>Message</label>
            </div>
            <Link to=''>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </Link>


        </form>
    </div>

    </div>
    </Router>
  )
}

export default UserForm