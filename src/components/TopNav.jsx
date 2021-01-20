import React from 'react'
import {Link} from "react-router-dom";
import Image from './global/Image'
import LinkButton from './global/LinkButton'
import logo from '../static/img/logos/logo.png'

const TopNav = () => (
  <nav className='row navbar navbar-dark navbar-expand-lg nav__top--nav'>
    <div className="container py-2">
      <Link to='/' className='brand'>
        <Image src={logo } alt='trucsr logo'/>
      </Link>
      <button className='navbar-toggler' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbar'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link to='/services' className='nav-link'>Services</Link>
          </li>
          <li className="nav-item ml-md-3">
             <Link to='/about-us' className='nav-link'>About Us</Link>
          </li>
          <li className="nav-item ml-md-3">
             <Link to='/csr-academy' className='nav-link'>CSR Academy</Link>
          </li>
          <li className="nav-item ml-md-3">
             <Link to='/publications' className='nav-link'>Publications</Link>
          </li>
          <li className="nav-item ml md-3">
             <Link to='/events' className='nav-link'>Events</Link>
          </li>
          <li className="nav-item ml-md-3">
             <Link to='/media' className='nav-link'>Media</Link>
          </li>
           <li className="nav-item m-0 ml-md-3">
             <LinkButton href='/media' clsNames='nav-link px-3 btn-success text-light' text='CONTACT US'/>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default TopNav