import React from 'react'
import Title from '../global/Title'
import Listing from './Listing'
import TestimonialCard from './TestimonialCard'

const Partners = () => {
  return (
    <section className="container-fluid mb-4 bg-light">
      <section className="container py-5">
        <div className='row'>
          <div className='col-12 col-md-3 offset-md-1'>
            <Title text='OUR PARTNERS' className=' d-flex align-items-center justify-content-center'/>
          </div>
          <div className="col-12 col-md-7">
            <p>TCSRN <span className='font-weight-bold'>founded in 2006</span>,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto mb-5">
            <Listing/>
          </div>
        </div>
        <div className="row mt-4 pb-5">
          <div className="col-12 col-md-10 mx-auto">
          <TestimonialCard/>
        </div>
        </div>
      </section>
    </section>
  )
}

export default Partners