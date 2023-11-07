'use client'

import { Button, Center, Stack, VStack } from '@chakra-ui/react'
import {useRouter} from 'next/navigation'

const Home = () => {

  const router = useRouter()

  return (
    <Center minH="100vh">
      <Stack>
        <VStack>
          <Button onClick={() => router.push('/auth/login')}>
            Login
          </Button>
        </VStack>
      </Stack>
    </Center>
  )
}

export default Home
