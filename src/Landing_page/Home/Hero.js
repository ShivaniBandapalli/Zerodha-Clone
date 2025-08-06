import React from 'react';
import './home.css'

function Hero(){
    
    return(
        <div className='containar mt-1' style={{paddingTop:"100px"}}>
            <div className='row text-center'>  
               <img src="media/images/homeHero.png" alt='heroimage' className='mb-5'/>
               <h1 className='mt-3 headStyle'>Invest in everything</h1>
               <p className='hStyle'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
               <button className='btnStyle'>Sign up for free</button>
            </div>
        </div>
    )
}

export default  Hero;