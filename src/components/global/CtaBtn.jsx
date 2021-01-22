import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Chevron} from '../../static/img/arrow-right.svg'
import '../../static/styles/global.scss'
/**
 *  Call To Action Button
 * @param {String} hreflinkbtn
 * @param {String} text
 * @param {String} clsNames
 */

const CtaBtn = ({href, text, clsNames}) => (
  <Link to={href} className={'btn linkbtn cta__btn text-success ' + clsNames}>
    <span className='btn--text'>{text}</span>
    <Chevron alt='' className='ml-2' fill='currentColor'/>
  </Link>
)

export default CtaBtn