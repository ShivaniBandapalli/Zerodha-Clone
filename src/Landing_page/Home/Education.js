import React from 'react';
import './home.css'

function Education(){
    return(
         <div className='containar'>
            <div className='row'>
                <div className='col-lg-5 col-md-5 col-sm-12 p-4 text-center'>
                    <img src='media/images/education.svg' alt='largestBroker' className='img-fluid' style={{marginBottom:"1rem"}}/>
                </div>
                <div className='col-lg-1 col-md-1'></div>
                <div className='col-lg-6 col-md-6 col-sm-12 p-4'>
                    <h3 className='h2Style mb-3'>Free and open market education</h3>
                    <p className='pStyle mb-3'>
                        Varsity, the largest online stock market education book in
                        the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' className='aStyle'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='pStyle mt-5 mb-3'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' className='aStyle'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
            
                </div>
            </div>
        </div>
    )
}

export default  Education;