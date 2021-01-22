import React from 'react'
import CtaBtn from '../global/CtaBtn'

const Slide1 = ({className}) => (
    <div className={`d-flex align-items-start flex-column p-0 hero__slide hero--slide1 ${className}`}>
      <header className='col-12 ml-5 col-md-7 col-lg-5 hero__slide--header'>
        <h2>14th Edition of <span className='d-md-block'>the SERAS CSR</span> Awards</h2>
        <p>The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria. it’ll be holding this year at Raddison Blu on the 2nd of February, 2021</p>
      </header>
      <div className="col-12">
        <CtaBtn href='/make-reservation' text='MAKE RESERVATION' clsNames='text-success px-0 mt-5 ml-5' />
      </div>
    </div>
  )
export default Slide1