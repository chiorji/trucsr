import React from 'react'
import TopNav from '../TopNav'
import Slide1 from './Slide1'
// import Slide2 from './Slide2'
import '../../static/styles/hero.scss'

const Hero = () => {
  return (
    <header className="container-fluid hero">
      <TopNav/>
      <div className="row hero__slides">
        <Slide1 />
        {/* <Slide2/> */}
      </div>
  </header>
  )
}

export default Hero