import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import AppDev from '../pages/AppDev';
import AppService from '../pages/AppService';
import Far from '../pages/Far';
import Footer from '../pages/Footer'

const AppDevPage = () => {
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
        <AppDev/>
        <AppService/>
        <Far/>
        <Footer/>
          </div>
      </div>
  )
}

export default AppDevPage
