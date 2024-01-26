import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar';
import Retails from '../pages/Retails';
import Far from '../pages/Far';
import RetainersServices from '../pages/RetainersServices';
const RetainersPage = () => {
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
        <Retails/>
        <RetainersServices/>
        <Far/>
          </div>
      </div>
  )
}

export default RetainersPage