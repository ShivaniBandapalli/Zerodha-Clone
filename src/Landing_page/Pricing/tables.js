import React from 'react';
import '../Home/home.css'

function Tables() {
    return ( 
        <div className='containar'>
            <h1 className='fs-3 mt-5 mb-3'>Charges for account Opening</h1>
            <table className="table border" style={{ marginBottom: "100px" }}>
                <thead>
                    <tr>
                        <th>Type of account</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Online account</td>
                        <td>Free</td>
                    </tr>
                    <tr className="table-light">
                        <td>Offline account</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                    <tr className="table-light">
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>₹ 500</td>
                    </tr>
                </tbody>
            </table>

            <h1 className='fs-3 mt-5 mb-3'>Demat AMC (Annual Maintenance Charge)</h1>
            <table className="table border">
                <thead>
                    <tr>
                        <th>Value of holdings</th>
                        <th>AMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Up to ₹4 lakh</td>
                        <td>Free</td>
                    </tr>
                    <tr className="table-light">
                        <td>₹4 lakh - ₹10 lakh</td>
                        <td>₹ 100 per year, charged quarterly*</td>
                    </tr>
                    <tr>
                        <td>Above ₹10 lakh</td>
                        <td>₹ 300 per year, charged quartlerly</td>
                    </tr>
                </tbody>
            </table>
            <p className='pfont' style={{ marginBottom: "100px" , color:"#424242"}}>
                * Lower AMC is applicable only if the account qualifies as a Basic Services 
                Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. 
                To learn more about BSDA, click here.
            </p>

             <h1 className='fs-3 mt-5 mb-3'>Charges for optional value added services</h1>
            <table className="table border">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Billing Frquency</th>
                        <th>Charges</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tickertape</td>
                        <td>Monthly / Annual</td>
                        <td>Free : 0 | Pro: 249/2399</td>
                    </tr>
                    <tr className="table-light">
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td>Kite Connect</td>
                        <td>Monthly</td>
                        <td>Connect: 500 | Historical: 500</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Tables;
            
            