import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import Far from '../pages/Far';
import Devops from '../pages/Devops';
import DevopsService from '../pages/DevopsService';
import Footer from '../pages/Footer';

const DevopsPage = () => {
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
        <Devops/>
        <DevopsService/>
        <Far/>
        <Footer/>
          </div>
      </div>
  )
}

export default DevopsPage
