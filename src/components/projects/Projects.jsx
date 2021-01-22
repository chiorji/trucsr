import React from 'react'
import Title from '../global/Title'
import LinkButton from '../global/LinkButton'
import Slides from './Slides'

const Projects = () => {
  return (
    <div className="container-fluid mt-5 p-0 bg-white">
      <div className="container">
        <div className="row">
           <div className='col-12 mt-4'>
              <Title text='OUR PROJECTS' className=' d-flex align-items-center justify-content-center'/>
            </div>
        </div>
      </div>
      <Slides/>
      <div className="container mb-5 mt-3">
        <div className="row">
          <div className="col-12 col-md-3 my-4 mx-auto">
            <LinkButton href='/projects' text='VIEW ALL PROJECTS' className=' btn-success text-light font-weight-bold btn-block py-2 '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects