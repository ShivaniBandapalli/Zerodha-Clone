import React from 'react';
import "../Home/home.css";
import { Link } from 'react-router-dom';

function CreateTicket() {
    return (
        <div className='containar' style={{ paddingBottom: "20px" }}>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-12 mt-4'>
                    <div className='row border m-4 hover-effect' data-bs-toggle="collapse" data-bs-target="#collapseContent" aria-expanded="false" aria-controls="collapseContent">
                        <div className='d-flex align-items-center ps-0'>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor: "#E0F2FE" }}>
                                <img src='media/images/plus-button.png' alt='Funds' style={{width:"25px", height:"25px"}} />
                            </div>
                            <button className="btn my-2  text-start" type="button">
                                Account Opening
                            </button>
                            <i class="fa-solid fa-angle-down ms-auto" style={{ color: "#387ed1" }} ></i>
                        </div>
                        <div class="collapse" id="collapseContent">
                            <div class="card card-body text-start" style={{ border: "none" }}>
                                <ul>
                                    <li className="Link">Resident individual</li>
                                    <li className="Link">Minor</li>
                                    <li className="Link">Non Resident Indian (NRI)</li>
                                    <li className="Link">Company, Partnership, HUF and LLP</li>
                                    <li className="Link">Glossary</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row border m-4 hover-effect' data-bs-toggle="collapse" data-bs-target="#collapseContent1" aria-expanded="false" aria-controls="collapseContent1">
                        <div className='d-flex align-items-center ps-0'>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor: "#E0F2FE" }}>
                                <i class="fa-regular fa-circle-user fs-4"></i>
                            </div>
                            <button className="btn my-2  text-start" type="button">
                                Your Zerodha Account
                            </button>
                            <i class="fa-solid fa-angle-down ms-auto" style={{ color: "#387ed1" }} ></i>
                        </div>
                        <div class="collapse" id="collapseContent1">
                            <div class="card card-body text-start" style={{ border: "none" }}>
                                 <ul>
                                    <li className="Link">Your Profile</li>
                                    <li className="Link">Account modification</li>
                                    <li className="Link">Client Master Report (CMR) and Depository Participant (DP)</li>
                                    <li className="Link">Nomination</li>
                                    <li className="Link">Transfer and conversion of securities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row border m-4 hover-effect' data-bs-toggle="collapse" data-bs-target="#collapseContent2" aria-expanded="false" aria-controls="collapseContent2">
                        <div className='d-flex align-items-center ps-0'>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor: "#E0F2FE" }}>
                                <img src='media/images/kiteshortlogo.jpeg' alt='Funds' style={{width:"30px", height:"30px"}} />
                            </div>
                            <button className="btn my-2  text-start" type="button">
                                Kite
                            </button>
                            <i class="fa-solid fa-angle-down ms-auto" style={{ color: "#387ed1" }} ></i>
                        </div>
                        <div class="collapse" id="collapseContent2">
                            <div class="card card-body text-start" style={{ border: "none" }}>
                                <ul>
                                    <li className="Link">IPO</li>
                                    <li className="Link">Trading FAQs</li>
                                    <li className="Link">Margin Trading Facility (MTF) and Margins</li>
                                    <li className="Link">Charts and orders</li>
                                    <li className="Link">Alerts and Nudges</li>
                                    <li className="Link">General</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row border m-4 hover-effect' data-bs-toggle="collapse" data-bs-target="#collapseContent3" aria-expanded="false" aria-controls="collapseContent3">
                        <div className='d-flex align-items-center ps-0'>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor: "#E0F2FE" }}>
                                <img src='media/images/rupee.png' alt='Funds' style={{width:"30px", height:"30px"}} />
                            </div>
                            <button className="btn my-2  text-start" type="button">
                                Funds
                            </button>
                            <i class="fa-solid fa-angle-down ms-auto" style={{ color: "#387ed1" }} ></i>
                        </div>
                        <div class="collapse" id="collapseContent3">
                            <div class="card card-body text-start" style={{ border: "none" }}>
                                <ul>
                                    <li className="Link">Add money</li>
                                    <li className="Link">Withdraw money</li>
                                    <li className="Link">Add bank accounts</li>
                                    <li className="Link">eMandates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row border m-4 hover-effect' data-bs-toggle="collapse" data-bs-target="#collapseContent4" aria-expanded="false" aria-controls="collapseContent4">
                        <div className='d-flex align-items-center ps-0'>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor: "#E0F2FE" }}>
                                <img src='media/images/game-button.png' alt='Funds' style={{width:"30px", height:"30px"}} />
                            </div>
                            <button className="btn my-2  text-start" type="button">
                                Console
                            </button>
                            <i class="fa-solid fa-angle-down ms-auto" style={{ color: "#387ed1" }} ></i>
                        </div>
                        <div class="collapse" id="collapseContent4">
                            <div class="card card-body text-start" style={{ border: "none" }}>
                                <ul>
                                    <li className="Link">Portfolio</li>
                                    <li className="Link">Corporate actions</li>
                                    <li className="Link">Funds statement</li>
                                    <li className="Link">Reports</li>
                                    <li className="Link">Profile</li>
                                    <li className="Link">Segments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='row border m-4 hover-effect' data-bs-toggle="collapse" data-bs-target="#collapseContent5" aria-expanded="false" aria-controls="collapseContent5">
                        <div className='d-flex align-items-center ps-0'>
                            <div className="d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px", backgroundColor: "#E0F2FE" }}>
                                <img src='media/images/coin-button.png' alt='Funds' style={{width:"30px", height:"30px"}} />
                            </div>
                            <button className="btn my-2  text-start" type="button">
                                Coin
                            </button>
                            <i class="fa-solid fa-angle-down ms-auto" style={{ color: "#387ed1" }} ></i>
                        </div>
                        <div class="collapse" id="collapseContent5">
                            <div class="card card-body text-start" style={{ border: "none" }}>
                                <ul>
                                    <li className="Link">Mutual funds</li>
                                    <li className="Link">National Pension Scheme (NPS)</li>
                                    <li className="Link">Fixed Deposit (FD)</li>
                                    <li className="Link">Features on Coin</li>
                                    <li className="Link">Payments and Orders</li>
                                    <li className="Link">General</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-12 mt-4'>
                    <div className='mt-4 p-3' style={{ backgroundColor: "#f9e8d2ff", borderLeft: "0.65rem solid #ff9100" }}>
                        <ul>
                        <a className='aStyle' style={{ textDecoration: "underline" }}><li className='mb-2'>Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>
                        <a className='aStyle' style={{ textDecoration: "underline" }}><li>Revision in expiry day of Index and Stock derivatives contract</li></a>
                        </ul>
                    </div>
                    <div>
                        <table className='table border mt-5'>
                            <thead>
                                <tr><th className='table-light'>Quick Links</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><Link className="Link fw-semibold ps-3">1. Track account opening</Link></td></tr>
                                <tr><td><Link className="Link fw-semibold ps-3">2. Track segment activation</Link></td></tr>
                                <tr><td><Link className="Link fw-semibold ps-3">3. Intraday margins</Link></td></tr>
                                <tr><td><Link className="Link fw-semibold ps-3">4. Kite user manual</Link></td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;