import React from 'react';
import '../Home/home.css'
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
    <>
       <div className='containar' style={{paddingBottom:"20px",paddingTop:"100px"}}>
       <div className='border-bottom text-center pb-5'>
        <h2 className='h2Style mediah2'>
            We pioneered the discount broking model in India.<br />
            Now, we are breaking ground with our technology.
        </h2>
        </div>
        <div className='row p-lg-5 justify-content-center'>
                <div className='col-lg-5 col-md-12 col-sm-12 mt-5'>
                    <p className='pStyle text-dark'>
                        We kick-started operations on the 15th of August,
                        2010 with the goal of breaking all barriers that traders
                        and investors face in India in terms of cost, support, and technology.
                        We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p className='pStyle text-dark mt-3'>
                        Today, our disruptive pricing models and in-house 
                        technology have made us the biggest stock broker in India.
                    </p>
                    <p className='pStyle text-dark mt-3'>
                        Over 1.6+ crore clients place billions of orders every year
                        through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className='col-lg-5 col-md-12 col-sm-12 mt-5'>
                    <p className='pStyle text-dark'>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p className='pStyle text-dark mt-3'>
                        <Link className='Link'>Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p className='pStyle text-dark mt-3'>
                        And yet, we are always up to something new every day. 
                        Catch up on the latest updates on our <Link className='Link'>blog</Link> or see what 
                        the media is <Link className='Link'>saying about us</Link>  or learn more about our business and product <Link className='Link'>philosophies</Link>.
                    </p>
                </div>
            </div>
       </div>

    </> 
    );
}

export default Hero;