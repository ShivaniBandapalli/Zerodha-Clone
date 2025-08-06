import React from 'react';
import '../Home/home.css'
import {Link} from 'react-router-dom';

function Brokerage() {
    return (
        <div className='containar' style={{paddingBottom:"30px"}}>
            <h1 className='fs-3 mt-5 mb-4 ps-3 border-bottom'>Equity</h1>
            <table className="table border mb-5">
                <thead>
                    <tr>
                        <th> </th>
                        <th>Equity delivery</th>
                        <th>Equity intraday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brokerage</td>
                        <td>Zero Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    </tr>
                    <tr className="table-light">
                        <td>STT/CTT</td>
                        <td>0.1% on buy & sell</td>
                        <td>0.025% on the sell side</td>
                    </tr>
                    <tr>
                        <td>Transaction charges</td>
                        <td>NSE: 0.00297% <br />BSE: 0.00375%</td>
                        <td>NSE: 0.00297% <br />BSE: 0.00375%</td>
                    </tr>
                    <tr className="table-light">
                        <td>GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td>SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                    <tr className="table-light">
                        <td>Stamp charges</td>
                        <td>0.015% or ₹1500 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
            <p className='hStyle text-center'><Link className='Link'>Calculate your costs upfront</Link> using our brokerage calculator</p>
        </div>
    );
}

export default Brokerage;