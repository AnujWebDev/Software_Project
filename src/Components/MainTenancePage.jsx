import React, { useEffect } from 'react';
import DefaultNavbar from './DefaultNavbar';
import Maintenance from '../pages/Maintenance';
import Far from '../pages/Far';
import MaintenanceService from '../pages/MaintenanceServices';


const MainTenancePage = () => {
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
        <Maintenance/>
        <MaintenanceService/>
        <Far/>
          </div>
      </div>
  )
}

export default MainTenancePage
