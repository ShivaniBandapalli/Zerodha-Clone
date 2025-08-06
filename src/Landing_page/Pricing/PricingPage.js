import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Tables from './tables';
import Charges from './Charges';


function PricingPage() {
    return ( 
        <>
         <Hero />
         <Brokerage />
         <Tables />
         <Charges />
         
        </>
     );
}

export default PricingPage;