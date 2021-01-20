import React from 'react'
import { ReactComponent as Dash } from '../../static/img/dash.svg'

const Title = ({text, prefix=true, className}) => (
  <header className={'header__title text-primary ' + className}>
    {prefix && <Dash className='mr-3' width='30' height='5' fill='currentColor' />}
    <h5 className='m-0 p-0'>{text.toUpperCase()}</h5>
  </header>
)

export default Title