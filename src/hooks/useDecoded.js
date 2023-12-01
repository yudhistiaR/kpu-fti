'use client'

import { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'

const useDecoded = userToken => {
  const [token, setToken] = useState({
    npm: '',
    name: '',
    prodi: ''
  })

  useEffect(() => {
    if (userToken == null) return 'Token not found'

    const decoded = jwt.decode(userToken, process.env.JWT_SECRET)

    const { npm, name, prodi } = decoded

    setToken({ npm: npm, name: name, prodi: prodi })
  }, [userToken])

  return token
}

export { useDecoded }
