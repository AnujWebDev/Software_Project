import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import AppDev from '../pages/AppDev';
import AppService from '../pages/AppService';
import Far from '../pages/Far';

const AppDevPage = () => {
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
        <AppDev/>
        <AppService/>
        <Far/>
          </div>
      </div>
  )
}

export default AppDevPage
