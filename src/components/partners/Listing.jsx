import React from 'react'
import Image from '../global/Image'
// First row
import nestle from '../../static/img/partners/nestle.png'
import firstbank from '../../static/img/partners/firstbank.png'
import gtbank from '../../static/img/partners/gtb.png'
import lafarge from '../../static/img/partners/lafarge.png'
// Second row
import act from '../../static/img/partners/act.png'
import chevron from '../../static/img/partners/chevron.png'
import dangote from '../../static/img/partners/dangote.png'
import fcmb from '../../static/img/partners/fcmb.png'

const Listing = () => {
  const list = [{ name: 'Nestle', img: nestle }, { name: 'First Bank', img: firstbank }, { name: 'GTBank', img: gtbank }, { name: 'Lafarge', img: lafarge }, { name: 'ACT', img: act }, { name: 'Chevron', img: chevron }, { name: 'Dangote', img: dangote }, { name: 'FCMB', img: fcmb }]

  return (
   <>
    <div className="row">
      {list.slice(0, 4).map((partner, index) => (
        <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
          <div className="bg-white shadow rounded px-4 py-2"  style={{height:'100'}}>
            <Image src={partner.img} alt={partner.name} className='w-100 h-100'/>
          </div>
      </div>
     ))}
      </div>
      <div className="row">
      {list.slice(4, 8).map((partner, index) => (
        <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
          <div className="bg-white shadow rounded px-4 py-2"  style={{height:'100'}}>
            <Image src={partner.img} alt={partner.name} className='w-100'/>
          </div>
      </div>
     ))}
    </div>
  </>
  )
}

export default Listing