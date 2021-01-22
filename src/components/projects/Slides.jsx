import React from 'react'
import Image from '../global/Image'
import children from '../../static/img/children.png'
import sera from '../../static/img/sera.png'
import '../../static/styles/projects.scss'

const Slide = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 d-flex no-wrap overflow-auto">
          <ProjectCard />
          <ProjectCard path={children} header='Save the Children initiative powered by Chevron'/>

          <ProjectCard path={sera} header='14th Edition of the SERAS CSR' text="The SERAS is an acronym for Sustainability, Entrepreneurship and Responsibility Awards. The Story of The SERAS began in 2007 when the very first edition held at Lagos, Nigeria."/>

          <ProjectCard />
       </div>
      </div>
    </div>
  )
}

function ProjectCard({path, header, text}) {
  return (
    <div className="col-4 project__card">
      <div className="card--overlay border h-100">
        <Image src={path || sera} alt='Project' className='w-100 h-100' />
        <div className="card--body">
          <header className='card--header'>
            <h2 className='font-weight-bold'>{header || 'Hello there!, it is trucsr'}</h2>
          </header>
          <div className="card--text">
            <p>{text || 'orem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt odio unde dignissimos distinctio praesentium veritatis mollitia, animi odit repellat porro numquam vitae autem dolore provident at dolores fuga beatae deserunt?'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide