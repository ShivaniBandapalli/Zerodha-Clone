import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/signup/signup';
import AboutPage from './Landing_page/About/AboutPage';
import ProductPage from './Landing_page/Product/ProductPage';
import PricingPage from './Landing_page/Pricing/PricingPage';
import SupportPage from './Landing_page/Support/SupportPage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />}></Route>
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/about' element={<AboutPage />}></Route>
    <Route path='/products' element={<ProductPage />}></Route>
    <Route path='/pricing' element={<PricingPage />}></Route>
    <Route path='/support' element={<SupportPage />}></Route>
    <Route path='*' element={<NotFound />}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
);

