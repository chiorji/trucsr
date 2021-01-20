import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Tw } from '../static/img/logos/twitter.svg'
import { ReactComponent as Fb } from '../static/img/logos/facebook.svg'
import {ReactComponent as In} from '../static/img/logos/linkedin.svg'
import '../static/styles/footer.scss'

const Footer = () => {
  return (
    <footer className="container-fluid bg-primary footer">
      <div className="container">
        <div className="row">
          <div className="col-10 p-0 py-5 mx-auto">
          <div className="row">

          {/* START CUSTOMER SERVICE */}
          <div className="col-12 col-md-3">
            <header className="footer__header">
              <h6 className="header--text">CUSTOMER SERVICE</h6>
            </header>
            <ul className="footer__links list-unstyled">
              <li>
                <Link to='/faqs'>FAQs</Link>
              </li>
               <li>
                <Link to='/customer-service'>Customer Service</Link>
              </li>
            </ul>
          </div>

          {/* START BUSINESS */}
          <div className="col-12 col-md-3">
            <header className="footer__header">
              <h6 className="header--text">BUSINESS</h6>
            </header>
            <ul className="footer__links list-unstyled">
              <li>
                <Link to='/careers'>Careers</Link>
              </li>
              <li>
                <Link to='/partner-with-us'>Partner with Us</Link>
              </li>
              <li>
                <Link to='/investor-relation'>Investor Relation</Link>
              </li>
            </ul>
          </div>

          {/* START COMPANY */}
          <div className="col-12 col-md-2">
            <header className="footer__header">
              <h6 className="header--text">COMPANY</h6>
            </header>
            <ul className="footer__links list-unstyled">
              <li>
                <Link to='/about-us'>About Us</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/partners'>Partners</Link>
              </li>
              <li>
                <Link to='/customer-stories'>Customer Stories</Link>
              </li>
              <li>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* START COMPANY ADDRESS */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-end text-right">
            <small>LAGOS NIGERIA</small>
            <small>
              30, Shakiru Anjorin Street, Road 39, Off<br/>
              Admiralty Way,Lekki Phase 1, Lekki, Lagos,<br/>
              Phone: +234 123 4456
              </small>
            <small className='footer__social mt-3'>
              <a href='https://twitter.com/trucsr' className='mr-1'><Tw /></a>
              <a href='https://facebook.com/trucsr'  className='mr-1'><Fb /></a>
              <a href='https://linkedin.com/in/trucsr'><In/></a>
            </small>
          </div>
        </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer