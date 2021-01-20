import { Link } from 'react-router-dom'
import {ReactComponent as Chevron} from '../../static/img/arrow-right.svg'
import '../../static/styles/global.scss'

/**
 * Customized link element to behave and feel like a button
 * @param {String} href
 * @param {String} text
 * @param {String} clsNames
 */

const LinkButton = ({href, text, clsNames}) => (
  <Link to={href} className={'btn btn-sm linkbtn m-0 d-flex align-items-center justify-content-center ' + clsNames}>
    <span className=''>{text}</span>
    <Chevron alt='' className='ml-2' fill='currentColor' />
  </Link>
)

export default LinkButton