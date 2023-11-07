'use client'

import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import ConfirmProfile from './ui/ComfirmProfile'

function ConfirmContainer() {
  const verify = getCookie('vertivication')

  const [isVerify, setIsVerify] = useState(false)

  useEffect(() => {
    if (verify) {
      setIsVerify(true)
    }
  }, [verify])

  
  return (
    <div>
      {isVerify && <ConfirmProfile />}
      {/* <Bilik /> */}
    </div>
  )
}

export default ConfirmContainer