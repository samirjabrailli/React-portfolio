import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className="d-flex justifay-content-center bg-success ">
        <NavLink className=" link   text-light p-3" to="/home">  <i class="fa-solid fa-house"></i> Ana Səhifə</NavLink>
        <NavLink className=" link   text-light p-3" to="/about"> <i class="fa-solid fa-user"></i>  Haqqında</NavLink>
        <NavLink className=" link   text-light p-3" to="/contact"> <i class="fa-solid fa-phone"></i>  Əlaqə</NavLink>
        
    </div>
  )
}

export default Header