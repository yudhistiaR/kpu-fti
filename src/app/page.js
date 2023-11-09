'use client'

import { Center, Stack, VStack } from '@chakra-ui/react'
import ConfirmContainer from '@/components/ConfirmContainer'

const Home = () => {
  return (
    <Center minH="100vh">
      <Stack>
        <VStack>
          <ConfirmContainer />
        </VStack>
      </Stack>
    </Center>
  )
}

export default Home
