import React from 'react';
import './Home/home.css'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container text-center' style={{paddingBottom:"80px"}}>
            <h2 className='h2Style mb-3'>404 Not Found</h2>
            <p className='pStyle'>We couldn't find the page you were looking for. Visit <Link className='Link' to="/">Zerodha's Home Page</Link></p>
        </div>
     );
}

export default NotFound;