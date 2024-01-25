import React from 'react'
import About from '../pages/About'
import DefaultNavbar from './DefaultNavbar'

const AboutPage = () => {
  return (
    <div id="outer-container">
        <div id="page-wrap" className=' border'>
        <DefaultNavbar/>
        <About/>
          </div>
      </div>
  )
}

export default AboutPage
