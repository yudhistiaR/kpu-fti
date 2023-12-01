'use client'

import { getCookie } from 'cookies-next'
import ConfirmProfile from './ui/ComfirmProfile'
import Bilik from './Bilik'

function ConfirmContainer() {
  const vertify = getCookie('vertivication')

  let show = vertify === 'false'

  return <div>{show ? <ConfirmProfile /> : <Bilik />}</div>
}

export default ConfirmContainer
