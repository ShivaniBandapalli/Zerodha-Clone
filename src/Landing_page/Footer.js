import React from 'react';
import './Home/home.css'

function Footer() {
    return (
        <div className='containar border-top' style={{backgroundColor:"#fbfbfb",paddingBottom:"20px"}}>
            <div className='row'>
                <div className='col-lg-4 col-md-12 col-sm-12 p-4'>
                    <img src='media/images/logo.svg' alt='logo' style={{width:"150px",height:"20px"}} className='mb-3 mt-5'/>
                    <p className='pfont'>&copy; 2020-2025 , Zerodha Clone ltd. <br /> All rights reserved.</p>
                    <div>
                        <i className="fa-brands fa-x-twitter text-muted m-2 fs-5"></i>
                        <i className="fa-brands fa-facebook text-muted m-2 fs-5"></i>
                        <i className="fa-brands fa-instagram text-muted m-2 fs-5"></i>
                        <i className="fa-brands fa-linkedin text-muted m-2 fs-5"></i>
                        <hr style={{opacity:"0.1"}}/>
                        <i className="fa-brands fa-youtube text-muted m-2 fs-5"></i>
                        <i className="fa-brands fa-whatsapp text-muted m-2 fs-5"></i>
                        <i className="fa-brands fa-telegram text-muted m-2 fs-5"></i>
                    </div>
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12'>
                    <h5 className='mt-5 mb-3' style={{color:"#424242"}}>Account</h5>
                    <p className=' pfont'>Open demat account</p>
                    <p className=' pfont'>Minor demat account</p>
                    <p className=' pfont'>NRI demat account</p>
                    <p className=' pfont'>Commodity</p>
                    <p className=' pfont'>Dematerialisation</p>
                    <p className=' pfont'>Fund transfer</p>
                    <p className=' pfont'>MTF</p>
                    <p className=' pfont'>Referral program</p>
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12'>
                    <h5 className=' mt-5 mb-3 ' style={{color:"#424242"}}>Support</h5>
                    <p className=' pfont'>Contact us</p>
                    <p className=' pfont'>Support portal</p>
                    <p className=' pfont'>How to file a complaint?</p>
                    <p className=' pfont'>Status of your complaints</p>
                    <p className=' pfont'>Bulletin</p>
                    <p className=' pfont'>Circular</p>
                    <p className=' pfont'>Z-Connect blog</p>
                    <p className=' pfont'>Downloads</p>
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12'>
                    <h5 className=' mt-5 mb-3 '  style={{color:"#424242"}}>Company</h5>
                    <p className=' pfont'>About</p>
                    <p className=' pfont'>Philosophy</p>
                    <p className=' pfont'>Press & media</p>
                    <p className=' pfont'>Careers</p>
                    <p className=' pfont'>Zerodha Cares (CSR)</p>
                    <p className=' pfont'>Zerodha.tech</p>
                    <p className=' pfont'>Open source</p>
                </div>
                <div className='col-lg-2 col-md-12 col-sm-12'>
                    <h5 className=' mt-5 mb-3 '  style={{color:"#424242"}}>Quick Links</h5>
                    <p className=' pfont'>Upcoming IPOs</p>
                    <p className=' pfont'>Brokerage charges</p>
                    <p className=' pfont'>Market holidays</p>
                    <p className=' pfont'>Economic calendar</p>
                    <p className=' pfont'>Calculators</p>
                    <p className=' pfont'>Markets</p>
                    <p className=' pfont'>Sectors</p>
                </div>
            </div>
            <div className='row mt-5'>
                <p className='' style={{fontSize:"12px",lineHeight:"1.8",color:"#9b9b9b"}}>
                 Zerodha Clone Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
                 INZalksljfsalka CDSL/NSDL: Depository services through Zerodha Clone Broking Ltd.
                – SEBI Registration no.: IN-sb-431-2019 Commodity Trading through Zerodha Clone Commodities Pvt.
                 Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Clone Broking 
                 Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, 
                 Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha Clone.com, 
                 for DP related to dp@zerodha Clone.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p className='' style={{fontSize:"12px",lineHeight:"1.8",color:"#9b9b9b"}}>
                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: 
                    Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p> 
                <p className='' style={{fontSize:"12px",lineHeight:"1.8",color:"#9b9b9b"}}>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p className='' style={{fontSize:"12px",lineHeight:"1.8",color:"#9b9b9b"}}>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository 
                    system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and 
                    receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>
                <p className='' style={{fontSize:"12px",lineHeight:"1.8",color:"#9b9b9b"}}>
                    India's largest broker based on networth as per NSE. NSE broker factsheet
                </p>
                <p className='' style={{fontSize:"12px",lineHeight:"1.8",color:"#9b9b9b"}}>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive
                     information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest
                      of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered 
                      intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
                      " Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign
                    the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
                     As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha Clone and 
                     offering such services, please create a ticket here.
                </p>
                <div className='text-center'>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>NSE</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>BSE</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>MCX</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>Terms & Conditions</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>Policies & procedures</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>Privacy policy</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>Disclosure</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>For investor's</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>attention</a>
                <a className='me-5' style={{fontSize:"0.75rem",textDecoration:"none",color:"#9b9b9b",fontWeight:"500"}}>Investor charter</a>
                </div>
            </div>
            
        </div>
     );
}

export default Footer;