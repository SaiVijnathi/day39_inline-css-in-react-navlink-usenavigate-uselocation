import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
        <form>
            <h2>SignUp</h2>
            <div>
                <label>First Name</label>
                <input placeholder="Enter your First Name"></input>
            </div>
            <div>
                <label>Last Name</label>
                <input placeholder="Enter your Last Name"></input>
            </div>
            <div>
                <label>Age</label>
                <input type='number' placeholder="Enter your Age"></input>
            </div>
            <div>
                <label>Email</label>
                <input type='email' placeholder="Enter your Email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder="Enter your password"></input>
            </div>
            <div>
                <label>MobileNo.</label>
                <input placeholder="Enter your Mobile Number"></input>
            </div>
            <div>
                <label id="file">Profile Pic</label>
                <input type='file'></input>
            </div>
            <div>
                <button type='button'>SignUp</button>
            </div>
        </form>
        <Link to="/" style={{textDecoration:"none",color:"green",fontSize:"1.3rem"}}>LogIn</Link>
    </div>
  )
}

export default SignUp