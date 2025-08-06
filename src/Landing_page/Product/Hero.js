import React from 'react';
import '../Home/home.css';
import {Link} from 'react-router-dom';

function Hero() {
    return ( 
        <div className='containar' style={{paddingBottom:"50px",paddingTop:"100px"}}>
        <div className='mediah2  border-bottom text-center'>   
        <h2 className='h1Style'>
            Zerodha Products
        </h2>
        <p className='hStyle'>Sleek, modern, and intuitive trading platforms</p>
        <p className='pStyle mb-5'>Check out our <Link className='Link'> investment offerings → </Link></p>
        </div>
        </div> 
     );
}

export default Hero;