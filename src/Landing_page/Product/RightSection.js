import React from 'react';

function RightSection({imageURL,productName,productDesc,tryDemo}) {
    return ( 
        <div className='containar' style={{paddingBottom:"80px"}}>
            <div className='row justify-content-center'>
                <div className='col-lg-5 col-md-12 col-sm-12 p-5'>
                    <h2 className='h2Style mb-3'>{productName}</h2>
                    <p className='pStyle'>{productDesc}</p>
                    <div className='text-start row justify-content-start'>
                        <div className='col-lg-5 col-md-3 col-sm-4'><a href='' className='aStyle'>{tryDemo}<i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='text-center col-lg-6 col-md-12 col-sm-12'>
                    <img src={imageURL} className='img-fluid'/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;