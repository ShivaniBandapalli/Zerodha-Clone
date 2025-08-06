import React from 'react';
import '../Home/home.css'

function Hero() {
    return ( 
        <div className='containar' style={{paddingBottom:"10px",backgroundColor:"#f6f6f6",height:"260px",paddingTop:"80px"}}>
            <div className='d-flex'>
                <span className='fs-1  fw-semibold m-3 me-auto'>Support Portal</span>
                <button className='ms-auto minibtn mt-3'>My tickets</button>
            </div>
            <div className='row mb-5 mb-lg-2 ps-4 pe-4'>
                <input placeholder= 'Eg: How do I open my account, How do i activate F&O...' className='hStyle' style={{color:"#9b9b9b",height:"50px", border:"1px solid #fbfbfb" , borderRadius:"4px"}}/>
            </div>
        </div>
     );
}

export default Hero;