import React from 'react';
import "../Home/home.css"
import OpenAccount from '../OpenAccount';

function Signup() {
    return (
        <> 
        <div className='containar text-center' style={{paddingBottom:"30px",paddingTop:"100px"}}>
            <h1 className='fs-2 mt-5' style={{paddingTop:"30px",paddingBottom:"10px"}}>Open a free demat and trading account online</h1>
            <p className='hStyle mb-5'>
                Start investing brokerage free and join a community of 1.6+ crore investors and traders
            </p>
            <div className='row justify-content-center mb-5' style={{paddingTop:"40px"}}>
            <div className='col-lg-7 col-12'>
            <img src='media/images/account_open.svg' className='img-fluid' style={{width:"80%"}}/>
            </div>
            <div className='col-lg-5 col-12 text-lg-start text-center pt-5'>
                <h2 className='h2Style pt-3'>Signup now</h2>
                <p className='pStyle'>Or track your existing application</p>
                <input placeholder='Enter mobile number' className='btnStyle mt-2' style={{backgroundColor:"#fbfbfb",width:"250px"}}/> <br />
                <button className='btnStyle my-3'>Sign up for free</button>
                <p className='pfont'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
            </div>
            </div>
        </div>
        <OpenAccount />
        </>
     );
}

export default Signup;