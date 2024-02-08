import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div class="container">
  <div class="box">
    <h1>Sign Up</h1>
    <div class="user">
      <i class="fas fa-user"></i>
      <input type="text" name="username" id="username" placeholder="Full Name"/>
      <i class="fas fa-envelope"></i>
      <input type="text" name="email" id="email" placeholder="Email Address"/>
      <i class="fas fa-unlock-alt"></i>
      <input type="password" name="password" id="password" placeholder="Password"/>
      <i class="fas fa-unlock-alt"></i>
      <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password"/>
    </div>
    <div class="login-btn">
      <button class="btn"> <a href="succes.html"> Submit</a></button>
      <p class="signup">Already have an account ? <a href="#">{
        <Link to='/login'>
        <span>Log In</span>
        </Link>
        
        } </a></p>
    </div>
  </div>
</div>
  )
}

export default Signup
