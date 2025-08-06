import React from 'react';
import './home.css'
function Pricing(){
    return(
        <div className='containar'>
            <div className='row'>
                <h3 className='h3Style'>Unbeatable pricing</h3>
            <div className='col-lg-5 col-sm-12 col-md-5'>
               <p className='pStyle'>
                We pioneered the concept of discount broking and price transparency in India.
                Flat fees and no hidden charges.
               </p>
            </div>
            <div className='col-lg-7 col-sm-12 col-md-7'>
                <div className='row justify-content-start'>
                    <div className='col-2'  style={{width:"80px",height:"70px",padding:"0px"}}>
                       <img src='media/images/pricing0.svg' alt="pricing0" style={{width:"100px",marginLeft:"-20px"}}/> 
                    </div>
                    <div className='col-2'  style={{width:"60px",height:"70px",padding:"0px"}}>
                       <p className='text-muted mt-4' style={{fontSize:"10px",lineHeight:"16px"}}>Free account <br /> opening</p> 
                    </div>
                    <div className='col-2' style={{width:"80px",height:"70px",padding:"0px"}}>
                        <img src='media/images/pricingEquity.svg' alt="pricing0" style={{width:"100px",marginLeft:"-5px"}}/> 
                    </div>
                    <div className='col-2'  style={{width:"110px",height:"70px",padding:"0px"}}>
                       <p className='text-muted mt-4' style={{fontSize:"10px",lineHeight:"16px",}}>Free equity delivery <br /> and direct mutual funds</p> 
                    </div>
                    <div className='col-2'  style={{width:"100px",height:"70px", padding:"0px"}}>
                        <img src='media/images/intradayTrades.svg' alt="pricing20" style={{width:"100px",marginLeft:'2px'}}/>
                    </div>
                    <div className='col-2'  style={{width:"60px",height:"70px",padding:"0px"}}>
                       <p className='text-muted mt-4' style={{fontSize:"10px",lineHeight:"16px"}}>intraday and <br /> F&O</p> 
                    </div>
                </div>
            </div>
            </div>
            <p className='pStyle'><a href='#' className='aStyle'>see pricing <i class="fa-solid fa-arrow-right"></i></a></p>
        </div>
    )
}

export default  Pricing;