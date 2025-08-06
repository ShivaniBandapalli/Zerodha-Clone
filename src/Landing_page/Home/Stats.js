import React from 'react';
import './home.css'

function Stats(){
    return(
        <div className='containar'>
            <h2 className='h2Style mb-5'>Trust with confidence</h2>
            <div className='row'>
                <div className='col-lg-5 col-sm-12 col-md-5'>
                    <div>
                        <h3 className='h3Style'>Customer-first always</h3>
                        <p className='pStyle mb-4'>
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of 
                            equity investments, making us India’s largest broker; contributing to 15% 
                            of daily retail exchange volumes in India.
                        </p>
                    </div>
                    <div>
                        <h3 className='h3Style'>No spam or gimmicks</h3>
                        <p className='pStyle mb-4'>
                            No gimmicks, spam, "gamification", or annoying push notifications.
                            High quality apps that you use at your pace, the way you like. Our philosophies.
                        </p>
                    </div>
                    <div>
                        <h3  className='h3Style'>The Zerodha universe</h3>
                        <p className='pStyle mb-4'>
                            Not just an app, but a whole ecosystem. Our investments in 
                            30+ fintech startups offer you tailored services specific to your needs.
                        </p>
                    </div>
                    <div>
                        <h3  className='h3Style'>Do better with money</h3>
                        <p className='pStyle mb-4'>
                            With initiatives like Nudge and Kill Switch, we don't just facilitate
                            transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12 col-md-7'>
                    <img src='media/images/ecosystem.png' className='img-fluid' alt='ecosystem' style={{width:"90%"}}/>
                    <div className='text-center row justify-content-center'>
                        <div className='col-4'><a href='#' className='aStyle'>Exporle our products <i class="fa-solid fa-arrow-right"></i></a></div>
                        <div className='col-4'><a href='#' className='aStyle'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center mt-5'>
                <img src='media/images/pressLogos.png' className='col-lg-8 col-sm-12 col-md-12' alt='presslogos'/>
            </div>
        </div>
    )
}

export default  Stats;