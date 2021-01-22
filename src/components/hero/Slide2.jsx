import React from 'react'
import CtaBtn from '../global/CtaBtn'

const Slide2 = ({className}) => (
    <div className={`col-12 d-flex align-items-start flex-column p-0 hero__slide hero--slide2  ${className}`}>
      <header className='col-12 ml-5 col-md-7 col-lg-5 hero__slide--header'>
        <h2>We are in the business of sustainability</h2>
        <p>The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria. it’ll be holding this year at Raddison Blu on the 2nd of February, 2021</p>
      </header>
      <div className="col-12">
        <CtaBtn href='/make-reservation' text='EXPLORE SITE' clsNames='text-success px-0 mt-5 ml-5' />
      </div>
    </div>
)

export default Slide2