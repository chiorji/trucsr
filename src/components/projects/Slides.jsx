import React from 'react'
import Image from '../global/Image'
import sera from '../../static/img/sera.png'

const Slide = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 d-flex no-wrap overflow-auto">
          <ImageWithOverlay />
          <ImageWithOverlay />
          <ImageWithOverlay />
          <ImageWithOverlay />
          <ImageWithOverlay/>
       </div>
      </div>
    </div>
  )
}

function ImageWithOverlay() {
  return (
    <div className="col-4" style={{height:'450px'}}>
      <Image src={sera} alt='Project' className='border w-100 h-100' />
    </div>
  )
}


export default Slide