import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = (props) => {
  const navigate = useNavigate();

  let setLoggedIn = props.setLoggedIn;
  let isLoggedin = props.isLoggedin;
  const changehandler =(event) => {
    event.preventDefault();
    navigate("/Dashboard")
    setLoggedIn(true);
    toast.success("login was successful")
  }
  return (
    <div>
      <div className="loginform">
        <h2>Login</h2>
        <form action="" autocomplete="off">
            <p>Username</p>
            <input type="text" name="username" placeholder="Username"/>
            <p>Password</p>
            <input type="password" name="password" placeholder="Password"/>
            <span>
              <input type="checkbox" name="remember" id="remember"/>
              <label htmlFor="remember">Remember me</label>
            </span>
            {<button onClick={changehandler}>
              Log In
            </button>}
            
            <a href="#">Forgot your password?</a>
        </form>        
      </div>
    </div>
    )
  }

export default Login
