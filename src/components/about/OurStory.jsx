import React from 'react'
import Image from '../global/Image'
import Title from '../global/Title'
import CtoBtn from '../global/CtaBtn'
import nature from '../../static/img/nature1.png'
import skyscrapper from '../../static/img/sky-scrapper.png'

const OurStory = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12 col-md-4 offset-md-1 p-0">
          <Image src={nature} alt='Nature' className='img-fluid'/>
        </div>
        <div className="col-12 col-md-6">
          <Title text='Our Story' prefix={false} />
          <div className="mt-3 div__story">
            <p className='story--text'>The TruContact CSR Nigeria seed was sown long before the founder; <strong>Kenneth Egbas</strong> would even conceive the dream of starting a company. Life didn’t always hand him a fair deal. From his early days and upon graduation from university he always dreamed of running a business based on the idea that outcomes from his business activities would promote innovation, equitable distribution of resources, justice, reduce wastage and help eradicate poverty in Africa. This gave wings to the dream that became TruContact CSR Nigeria.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-3 offset-md-2 p-0 d-flex justify-contents-start">
          <Image src={skyscrapper} alt='' className='img-fluid align-self-start'/>
        </div>
        <div className="col-12 col-md-6">
          <div className="div__story">
            <p className="story--text">
              TCSRN was founded in 2006, and carried out what many have come to acknowledge as trail blazing spadework that led to a rapid growth of what has become a vibrant and viable corporate social responsibility and sustainability industry in Nigeria, and Africa.
            </p>
            <CtoBtn href='/read-our-story' text='READ FULL STORY'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory