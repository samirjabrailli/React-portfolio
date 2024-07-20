import React from 'react'
import SamirImage from '../image/Samir.jpg'
import { NavLink} from 'react-router-dom'
import './home.css'


function Profile() {
 
  return (
    <div >
      <h1 className='text-center text-success'>Samir Portfolio</h1>
       <div className="card mb-3  ">
  <div className=" row ">
    <div className="col-md-4  ">
      <img src={SamirImage} className='m-2' alt="" />
    </div>
    <div class="col-md-8  ">
      
      <div className="card-body text-center   ">
        <h5 className="card-title ">Samir Cəbrayıllı</h5>
        <p className="card-text">
          Front End Developer <br />
          <i class="fa-solid fa-phone"></i> TEL: +994 77 383 38 20 <br />
          <i class="fa-solid fa-envelope"></i> Email: samirjabrailli98@gmail.com

        </p>
        <NavLink className='card-link text-dark' to="/aboutme">Haqqında</NavLink>
      </div>
      
    </div>
  </div>
</div>
       
      
    </div>
  )
}

export default Profile