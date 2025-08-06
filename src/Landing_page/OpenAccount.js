import React from 'react';
import './Home/home.css'

function OpenAccount() {
    return ( 
        <div className='container text-center' style={{paddingBottom:"80px"}}>
            <h2 className='h2Style mb-3'>Open a Zerodha account</h2>
            <p className='pStyle'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='btnStyle'>Sign up for free</button>
        </div>
     );
}

export default OpenAccount;