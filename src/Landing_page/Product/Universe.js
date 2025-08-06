import React from 'react';
import '../Home/home.css';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
        <div className='containar text-center' style={{paddingBottom:"30px"}}>
            <p className='hStyle mb-5 text-center'>Want to know more about our technology stack? Check out the <Link className='Link'>Zerodha.tech</Link> blog.</p>
            <h2 className='h2Style mt-5 mb-3 text-center'>The Zerodha Universe</h2>
            <p className='text-center pStyle'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='row justify-content-center mt-5'>
            <div className=' col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4'>
                <div className='col-12 text-center'>
                    <img src='media/images/zerodhaFundHouse.png' alt='zerodhafundhouse' className='img-fluid m-4' style={{width:"200px",height:"55px"}}/>
                    <p className='pfont text-center'>
                        Our asset management venture <br />
                        that is creating simple and transparent index <br />
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-12 text-center'>
                    <img src="media/images/streakLogo.png" alt='streaklogo' className='img-fluid m-4' style={{width:"200px",height:"55px"}}/>
                    <p className='pfont text-center'>
                        Systematic trading platform <br />
                        that allows you to create and backtest <br />
                        strategies without coding.
                    </p>
                </div>
            </div>
            <div className='  col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4 '>
                <div className='col-12 text-center'>
                    <img src="media/images/sensibullLogo.svg" alt='sensibull' className='img-fluid m-4' style={{width:"200px",height:"55px"}}/>
                    <p className='pfont text-center'>
                        Options trading platform that lets you<br />
                        create strategies, analyze positions, and examine<br />
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                  <div className='col-12 text-center'>
                    <img src="media/images/smallcaseLogo.png" alt='smallcaselogo' className='img-fluid m-4' style={{width:"200px",height:"55px"}}/>
                    <p className='pfont text-center'>
                        Thematic investing platform <br />
                        that helps you invest in diversified<br />
                        baskets of stocks on ETFs.
                    </p>
                </div>
            </div>    
            <div className='  col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center text-center mb-4'>
                <div className='col-12 text-center'>
                    <img src='media/images/tijori.svg' alt='tijorilogo' className='img-fluid m-4' style={{width:"200px",height:"55px"}}/>
                    <p className='pfont text-center'>
                        Investment research platform <br />
                        that offers detailed insights on stocks,<br />
                        sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-12 text-center'>
                    <img src='media/images/dittoLogo.png' alt='dittologo' className='img-fluid m-4' style={{width:"200px",height:"55px"}}/>
                    <p className='pfont text-center'>
                        Personalized advice on life<br />
                        and health insurance. No spam<br />
                        and no mis-selling.
                    </p>
                </div>
            </div>
            </div>
            <button className='btnStyle m-5 text-center'>Sign up for free</button>
        </div>
     );
}

export default Universe;