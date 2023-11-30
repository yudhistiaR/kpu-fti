'use client'

import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'
import { useDecoded } from '@/hooks/useDecoded'

const ConfirmButton = () => {
  const getToken = getCookie('token')
  const { npm, name, prodi } = useDecoded(getToken)
  const [loading, setLoading] = useState(false)

  const path = useRouter()

  const handleClik = async () => {
    setLoading(true)

    const fd = new FormData()
    fd.append('npm', npm)
    fd.append('name', name)
    fd.append('prodi', prodi)

    try {
      await axios.post('/api/pemilih', fd, {
        headers: {
          Authorization: `Bearer ${getToken}`
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
    <Button isLoading={loading} onClick={handleClik}>
      Konfirmasi
    </Button>
  )
}

export default ConfirmButton
