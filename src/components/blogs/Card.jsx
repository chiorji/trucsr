import React from 'react'
import Image from '../global/Image'
import CtaBtn from '../global/CtaBtn'

// Destructure the props
const Card = ({img_url, posted_on, slug, body, url}) => (
  <li className="row blog__card p-0 d-flex mb-4 bg-light">
    <div className="col-12 col-md-5 p-0 card--image">
      <Image src={img_url} alt={slug} className='img-fluid'/>
    </div>
    <div className="col-12 col-md-4 py-2 card--body">
      <small>{posted_on}</small>
      <h4 className='text-primary my-3'>{slug}</h4>
      <p>{body}</p>
      {/* Since this is a dummy data, we replace the url dead link */}
      <CtaBtn href={`/${slug.replace(/:/, '').split(' ').join('-')}`} text="READ MORE" clsNames="text-success p-0 mt-5 "/>
    </div>
  </li>
)

export default Card