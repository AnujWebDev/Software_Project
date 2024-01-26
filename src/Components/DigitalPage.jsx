import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import Digital from '../pages/Digital';
import DigitalService from '../pages/DigitalService';
import Far from '../pages/Far';

const DigitalPage = () => {
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
        <Digital/>
        <DigitalService/>
        <Far/>
          </div>
      </div>
  )
}

export default DigitalPage
