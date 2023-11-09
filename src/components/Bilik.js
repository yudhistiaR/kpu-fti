'use client'

import { Button, Center, Stack, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import cookie from '@/lib/utils/cookie'
import { useState, useEffect } from 'react'

const Bilik = () => {
  const [path, setPath] = useState('')
  const token = cookie()

  useEffect(() => {
    if (token.prodi == 'Sistem Informasi') {
      setPath('si')
    }

    if (token.prodi == 'Teknik Informatika') {
      setPath('ti')
    }
  }, [token])

  return (
    <Center w="full">
      <Stack w="full">
        <VStack>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="purple">
            <Link href="/bilik/bem">Bilik BEM FTI</Link>
          </Button>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="blue">
            <Link href={`/bilik/${path}`}>Bilik HIMPUNAN FTI</Link>
          </Button>
        </VStack>
      </Stack>
    </Center>
  )
}

export default Bilik
