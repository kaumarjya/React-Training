import React from 'react'
import { Link, Outlet,NavLink } from 'react-router-dom'
import '../style/App.css'
function Courses() {
  return (
    <div>
        <h1>You are inside the Course component</h1>
            <div> <NavLink className={({isActive})=>(isActive?'active':'inactive')} to="/Course/search">Search</NavLink></div>
        <div>  <NavLink className={({isActive})=>(isActive?'active':'inactive')} to="/Course/list">List</NavLink></div>
      

      <p>My content are in below:</p>
        <div>
        <Outlet/>
        </div>
  
    </div>
  )
}

export default Courses
