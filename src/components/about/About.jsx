import React, {Suspense, lazy} from 'react'
import Title from '../global/Title'
const OurStory = lazy(()=>import('./OurStory'))

const AboutUs = () => (
    <section className="container-fluid bg-light py-5">
      <div className="container mb-3">
        <div className='row'>
          <div className='col-12 col-md-4'>
            <Title text='ABOUT US' className=' d-flex align-items-center justify-content-center'/>
          </div>
          <div className="col-12 col-md-7">
            <p>TCSRN <span className='font-weight-bold'>founded in 2006</span>,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
          </div>
        </div>
        </div>
      <Suspense fallback={<p>Loading our stories</p>}>
        <OurStory/>
      </Suspense>
    </section>
)

export default AboutUs