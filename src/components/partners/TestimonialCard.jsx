import React from 'react'
import CtaBtn from '../global/CtaBtn'
import Image from '../global/Image'
import kelechi from '../../static/img/kelechi-onuacho.png'


const TestimonialCard = () => (
  <div className="row">
    <div className="col-12 col-md-3 d-flex justify-content-end p-0 offset-md-2">
      <Image src={kelechi} alt='Kelechi Onuacho' height='250' />
    </div>
    <div className="col-12 col-md-6">
      <p>&quot;Working with TruCSR was the best decision I made for my business, most people underestimate the importance of Social responsibilty in this country, I&#39;m glad we consulted TruCSR&quot;</p>
      <h4 className='text-primary header__title mt-2 mb-0'>Mr Kelechi Onuacho</h4>
      <small>CEO, Nestle</small>
      <CtaBtn href='/testimonials' text='SEE MORE TESTIMONIALS' clsNames='mt-5 btn-block d-flex justify-content-end align-items-center text-success'/>
    </div>
  </div>
)

export default TestimonialCard