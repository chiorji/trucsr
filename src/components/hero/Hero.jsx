import React from 'react'
import TopNav from '../TopNav'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import '../../static/styles/hero.scss'

const Hero = () => (
    <header className="container-fluid p-0 hero">
        <div className="carousel slide slider" data-ride="carousel" id="slider">
        <ol className="carousel-indicators">
          <li data-target="#slider" data-slide-to="0" className="active"></li>
          <li data-target="#slider" data-slide-to="1" className=""></li>
        </ol>
        <div className="carousel-inner">
          <Slide2 className="carousel-item active"/>
          <Slide1 className="carousel-item" />
        </div>
      </div>
      <div className="w-100 top__nav--wrapper">
         <TopNav/>
     </div>
    </header>
)

export default Hero