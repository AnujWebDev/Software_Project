import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Technologies from '../pages/Technologies';
import Far from '../pages/Far';
import DefaultNavbar from './DefaultNavbar';
import Footer from '../pages/Footer';

const LandingPage = () => {
  return (
    <div id="outer-container">
        <div id="page-wrap">
        <DefaultNavbar/>
          <Home/>
          <Services/>
          <Technologies/>
          <Far/>
          <Footer/>
          </div>
      </div>
  )
}

export default LandingPage
