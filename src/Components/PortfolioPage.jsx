import React, { useEffect } from 'react';
import DefaultNavbar from './DefaultNavbar';
import Portfolio from './Portfolio';
import Footer from '../pages/Footer';

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div id="outer-container">
        <div id="page-wrap" className=' border'>
        <DefaultNavbar/>
          <Portfolio/>
          <Footer/>
          </div>
      </div>
  )
}

export default PortfolioPage
