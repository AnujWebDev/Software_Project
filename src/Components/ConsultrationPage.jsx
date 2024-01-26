import React, { useEffect } from 'react'
import DefaultNavbar from './DefaultNavbar'
import Consultation from '../pages/Consultation'
import Far from '../pages/Far'
import ConsultationService from '../pages/ConsultationService'

const ConsultrationPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div id="outer-container">
      <div id="page-wrap" className=" border">
        <DefaultNavbar />
        <Consultation/>
        <ConsultationService/>
        <Far />
      </div>
    </div>
  )
}

export default ConsultrationPage
