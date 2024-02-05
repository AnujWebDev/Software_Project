import React, { useEffect } from 'react'
import About from '../pages/About'
import DefaultNavbar from './DefaultNavbar'
import Footer from '../pages/Footer'

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
        <Footer/>
          </div>
      </div>
  )
}

export default AboutPage
