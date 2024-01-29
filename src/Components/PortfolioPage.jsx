import React from 'react';
import DefaultNavbar from './DefaultNavbar';
import Portfolio from './Portfolio';

const PortfolioPage = () => {
  return (
    <div id="outer-container">
        <div id="page-wrap" className=' border'>
        <DefaultNavbar/>
          <Portfolio/>
          </div>
      </div>
  )
}

export default PortfolioPage
