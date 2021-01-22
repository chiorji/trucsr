import React, {lazy, Suspense} from 'react'
import Hero from './hero/Hero'
import AboutUs from './about/About'
import Footer from './Footer'
import Blogs from './blogs/Blogs'
import Projects from './projects/Projects'
import Partners from './partners/Partners'
const Services = lazy(()=>import('./our-services/Services'))
// Lazy-loads blog component cause its data will come from api call
// const Blogs = lazy(()=>import('./blogs/Blogs'))

const LandingPage = () => (
  <>
    <Hero />
    <AboutUs />
    <Suspense fallback={<p className='text-primary text-center'>Loading...</p>}>
      <Services/>
    </Suspense>
    <Projects/>
    <Partners/>
    <Blogs/>
    <Footer />
  </>
)

export default LandingPage