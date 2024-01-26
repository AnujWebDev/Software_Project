import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import Far from '../pages/Far';
import Devops from '../pages/Devops';
import DevopsService from '../pages/DevopsService';

const DevopsPage = () => {
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
        <Devops/>
        <DevopsService/>
        <Far/>
          </div>
      </div>
  )
}

export default DevopsPage
