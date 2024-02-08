import React from 'react'
import logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


const Navbar = (props) => {

  let setLoggedIn = props.setLoggedIn;
  let isLoggedin = props.isLoggedin;
  return (
    <div>
      <Link to="/">
      <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
      { !isLoggedin &&
          <Link to="/login">
              <button
              onClick={
                <Link to="/login"/>
              }
              >Login</button>
          </Link>
        }
        { isLoggedin &&
          <Link to="/">
              <button
              onClick={()=>{
                setLoggedIn(false)
                toast.success("Logout was successful")
              }
              }
              >Logout</button>
          </Link>
        }
        {  !isLoggedin &&
          <Link to="/signup">
              <button>signup</button>
          </Link>
        }
        { isLoggedin &&
          <Link to='/Dashboard'>
              <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
