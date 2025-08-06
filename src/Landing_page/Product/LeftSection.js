import React from 'react';
import '../Home/home.css'

function LeftSection({imageURL,productName,productDesc,tryDemo}) {
    return ( 
        <div className='containar' style={{paddingBottom:"80px"}}>
            <div className='row justify-content-center'>
                <div className='text-center col-lg-6 col-md-12 col-sm-12'>
                    <img src={imageURL} className='img-fluid'/>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5 col-md-12 col-sm-12 p-5'>
                    <h2 className='h2Style mb-3'>{productName}</h2>
                    <p className='pStyle'>{productDesc}</p>
                    <div className='text-start row justify-content-start'>
                        <div className='col-lg-5 col-md-3 col-sm-4'><a href='' className='aStyle'>{tryDemo}<i class="fa-solid fa-arrow-right"></i></a></div>
                        <div className='col-lg-5 col-md-3 col-sm-4'><a href='' className='aStyle'>learnMore <i class="fa-solid fa-arrow-right"></i></a></div>
                    </div>
                    <div className='row justify-content-start mt-3'>
                        <div className='col-lg-5 col-md-3 col-sm-4'><a href='' className='aStyle'><img src="media/images/googlePlayBadge.svg"/></a></div>
                        <div className='col-lg-5 col-md-3 col-sm-4'><a href='' className='aStyle'><img src="media/images/appstoreBadge.svg"/></a></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;