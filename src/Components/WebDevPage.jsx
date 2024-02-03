import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import WebDev from '../pages/WebDev';
import WebService from '../pages/WebService';
import Far from '../pages/Far';
import Footer from '../pages/Footer';

const WebDevPage = () => {
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
        <WebDev/>
        <WebService/>
        <Far/>
        <Footer/>
          </div>
      </div>
  )
}

export default WebDevPage
