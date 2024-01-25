import React from 'react';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Technologies from '../pages/Technologies';
import Far from '../pages/Far';
import DefaultNavbar from './DefaultNavbar';

const LandingPage = () => {
  return (
    <div id="outer-container">
        <div id="page-wrap" className=' border'>
        <DefaultNavbar/>
          <Home/>
          <Services/>
          <Technologies/>
          <Far/>
          </div>
      </div>
  )
}

export default LandingPage
