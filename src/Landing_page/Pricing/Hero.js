import React from 'react';
import '../Home/home.css'

function Hero() {
    return ( 
        <div className='containar text-center' style={{paddingBottom:"50px",paddingTop:"100px"}}>
            <div className='pricingmedia'>
            <h1 className='fs-2 mt-4'>Charges</h1>
            <p className='hStyle mb-5' style={{color:"#9b9b9b"}}>List of all Charges and taxes</p>
            </div>
            <div className='row justify-content-center'>
                <div className='col-lg-4 col-12'>
                    <img src='media/images/pricing0.svg' alt='pricing0' style={{width:"230px",height:"230px"}}/>
                    <h2 className='fs-2 mb-4'>Free equity delivery</h2>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-lg-4 col-12'>
                    <img src='media/images/intradayTrades.svg' alt='pricing20'style={{width:"230px",height:"230px"}}/>
                    <h2 className='fs-2 mb-4'>Intraday and F&O trades</h2>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 col-12'>
                    <img src='media/images/pricing0.svg' alt='pricing0' style={{width:"230px",height:"230px"}}/>
                    <h2 className='fs-2 mb-4'>Free direct MF</h2>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;