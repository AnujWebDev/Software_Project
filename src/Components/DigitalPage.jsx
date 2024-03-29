import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import Digital from '../pages/Digital';
import DigitalService from '../pages/DigitalService';
import Far from '../pages/Far';
import Footer from '../pages/Footer';

const DigitalPage = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

  return (
    <div id="outer-container">
        <div id="page-wrap">
        <DefaultNavbar/>
        <Digital/>
        <DigitalService/>
        <Far/>
        <Footer/>
          </div>
      </div>
  )
}

export default DigitalPage
