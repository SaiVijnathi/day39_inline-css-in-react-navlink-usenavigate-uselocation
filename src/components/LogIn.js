import {React, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';


function LogIn() {

    let navigate = useNavigate();

    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let messageInputRef = useRef();

  return (
    <div>
        <form>
            <h2>LogIn</h2>
            
            <div>
                <label>Email</label>
                <input type='email' placeholder="Enter your Email" ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder="Enter your password" ref={passwordInputRef}></input>
            </div>

            <div>
                <label>Message</label>
                <input ref={messageInputRef} placeholder="Enter any Message to display"></input>
            </div>

            <div>
                <button type='button' onClick={()=>{

                    let typedEmail = emailInputRef.current.value;
                    let typedPassword = passwordInputRef.current.value;
                    let typedMessage = messageInputRef.current.value;

                    if(typedEmail == "saivijnathi@gmail.com" &&
                    typedPassword == "vijnathi"){
                    navigate("/dashboard",{state:{msg:typedMessage}});
                    }else{
                        alert("Invalid email or password.");
                    }


                }}>LogIn</button>
            </div>
        </form>
        <Link to="/signup" style={{textDecoration:"none",color:"green",fontSize:"1.3rem"}}>SignUp</Link>
    </div>
  )
}

export default LogIn;