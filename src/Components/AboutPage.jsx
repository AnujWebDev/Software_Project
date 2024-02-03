import React, { useEffect } from 'react'
import About from '../pages/About'
import DefaultNavbar from './DefaultNavbar'

const AboutPage = () => {
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
        <About/>
          </div>
      </div>
  )
}

export default AboutPage
