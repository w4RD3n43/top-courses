import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='Home'>
      <Outlet/>
      <h1>Home</h1>
    </div>
  )
}

export default Home
