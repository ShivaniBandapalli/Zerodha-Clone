import React from 'react';
import './Home/home.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
    <div className='containar' style={{paddingBottom:"0px"}}>   
    <nav className="navbar navbar-expand-lg fixed-top border-bottom bg-white p-2">
    <div className="container-fluid">
    <Link className='navbar-brand' to="/">
            <img src="media/images/logo.svg" alt='logo' className='ml-lg-6' style={{width:"150px" , height:'20px'}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" to="/signup">Signup</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/pricing">Pricing</Link>
        <Link className="nav-link" to="/support">Support</Link>
        <Link className="nav-link" to="/"><i class="fa-solid fa-bars"></i></Link>
      </div>
     </div>
     </div>
    </nav>
    </div>
    );
}

export default Navbar;