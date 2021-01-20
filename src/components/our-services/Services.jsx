import React, {useEffect, useState} from 'react'
import Utils from '../../utils/'
import Title from '../global/Title'
import Card from './Card'

const Services = () => {
  const [services, setServices] = useState([])

useEffect(() => {
  console.log(services)
    Utils.getResource('services').then(res => {
      setServices(res.data.services)
    }).catch(err => {
      // Just logs error, nothing much here
      console.error(err)
    })
}, [services])

  return (
    <div className="container-fluid p-0 mt-5">
      <div className="container border border-danger mb-3">
        <div className='row mb-4'>
          <div className='col-12 col-md-3 offset-md-1'>
            <Title text='OUR SERVICES' className=' d-flex align-items-center justify-content-start'/>
          </div>
          <div className="col-12 col-md-7">
            <p>TCSRN <span className='font-weight-bold'>founded in 2006</span>,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {services && services.map((service, index) => (
                <Card {...service} key={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services