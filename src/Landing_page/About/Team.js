import React from 'react';
import '../Home/home.css'
import { Link } from 'react-router-dom';

function Team() {
    return ( 
        <div className='containar'>
            <div className='row p-lg-5 justify-content-center mb-5'>
                <h2 className='h2Style text-center'>People</h2>
                <div className='col-lg-4 col-md-12 col-sm-12 text-center mt-5'>
                    <img src='media\images\nithinKamath.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Nithin Kamath</p>
                    <p className='text-muted'>Founder, CEO</p>     
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 mt-5 ps-lg-5'>
                    <p className='pStyle text-dark mt-3'>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome 
                        the hurdles he faced during his decade long stint as a trader. 
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p className='pStyle text-dark'>
                       He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). 
                    </p>
                    <p className='pStyle text-dark'>
                        Playing basketball is his zen.
                    </p>
                    <p className='pStyle text-dark'>
                        Connect on <Link className='Link' to="/">Homepage</Link> / <Link className='Link'>TradingQnA</Link>  / <Link className='Link'>Twitter</Link> 
                    </p>
                </div>
            </div>
            <div className='row justify-content-center mt-3'>
                <div className='col-lg-3 col-md-12 col-sm-12 text-center mx-lg-5'>
                    <img src='media\images\Nikhil.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Nikhil Kamath</p>
                    <p className='text-muted'>Co-Founder & CFO</p>
                    <button className="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent1" aria-expanded="false" aria-controls="collapseContent1">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent1">
                   <div class="card card-body text-start" style={{border:"none"}}>
                        Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12 text-center mx-lg-5'>
                    <img src='media\images\Kailash.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Dr. Kailash Nadh</p>
                    <p className='text-muted'>CTO</p>
                    <button class="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent2" aria-expanded="false" aria-controls="collapseContent2">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent2">
                   <div class="card card-body text-start" style={{border:"none"}}>
                        Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12 text-center mx-lg-5'>
                    <img src='media\images\Venu.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Venu Madhav</p>
                    <p className='text-muted'>COO</p>
                    <button class="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent3" aria-expanded="false" aria-controls="collapseContent3">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent3">
                   <div class="card card-body text-start" style={{border:"none"}}>
                        Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.
                    </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center '>
                <div className='col-lg-3 col-md-12 col-sm-12 text-center mx-lg-5'>
                    <img src='media\images\Hanan.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Hanan Delvi</p>
                    <p className='text-muted'>CCO</p>
                    <button class="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent4" aria-expanded="false" aria-controls="collapseContent4">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent4">
                   <div class="card card-body text-start" style={{border:"none"}}>
                        We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12 text-center mx-lg-5'>
                    <img src='media\images\Seema.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Seema Patil</p>
                    <p className='text-muted'>Director</p>
                    <button class="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent5" aria-expanded="false" aria-controls="collapseContent5">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent5">
                   <div class="card card-body text-start" style={{border:"none"}}>
                        Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-12 col-sm-12 text-center mx-lg-5'>
                    <img src='media\images\karthik.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                    <p className='fs-4 mb-1'>Karthik Rangappa</p>
                    <p className='text-muted'>Chief of Education</p>
                    <button class="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent6" aria-expanded="false" aria-controls="collapseContent6">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent6">
                   <div class="card card-body text-start" style={{border:"none"}}>
                       Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.
                    </div>
                    </div>
                </div>
                <div className='row justify-content-start'>
                    <div className='col-lg-3 text-center mx-lg-5'>
                        <img src='media\images\Austin.jpg' alt='founder nithin' className='img-fluid rounded-circle mt-3 mb-3'/>
                        <p className='fs-4 mb-1'>Austin Prakesh</p>
                        <p className='text-muted'>Director Strategy</p>
                        <button class="btn pt-0 btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseContent7" aria-expanded="false" aria-controls="collapseContent7">
                       bio <i class="fa-solid fa-angle-down ms-auto"></i>
                    </button>
                   <div class="collapse" id="collapseContent7">
                   <div class="card card-body text-start" style={{border:"none"}}>
                        Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;