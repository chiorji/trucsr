import Image from '../global/Image'
import CtaBtn from '../global/CtaBtn'
import '../../static/styles/services.scss'

const Card = ({ title, description, img_url }) => (
    <div className="col-12 col-md-6 mb-4 image--card">
      <div className="card__inner rounded bg-primary text-light overflow-hidden">
        <div className="card__img">
        <Image src={img_url} alt={title} className='h-100 w-100'/>
      </div>
      <div className="card__body p-4 d-flex flex-column">
        <h5 className="card__title font-weight-bold">{title}</h5>
        <div className="card__desc">{description}</div>
        <CtaBtn text='WORK WITH US' clsNames='d-flex align-items-center justify-content-end align-self-end cta__btn'/>
      </div>
      </div>
  </div>
)

export default Card