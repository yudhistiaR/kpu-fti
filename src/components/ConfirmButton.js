'use client'

import { Button } from '@chakra-ui/react'
import cookie from '@/lib/utils/cookie'
import axios from 'axios'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

const ConfirmButton = () => {
  const [loading, setLoading] = useState(false)

  const path = useRouter()
  const data = cookie()

  const handleClik = async () => {
    setLoading(true)

    const { userid, name, prodi } = data

    try {
      const fd = new FormData()
      fd.append('name', name)
      fd.append('npm', userid)
      fd.append('prodi', prodi)

      await axios.post('/api/pemilih', fd, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setCookie('vertivication', true)
      setLoading(false)
      path.refresh()
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <Button disabled={loading} onClick={handleClik}>
      {loading ? 'Loading...' : 'Konfirmasi'}
    </Button>
  )
}

export default ConfirmButton
