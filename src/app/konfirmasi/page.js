'use client'

import ConfirmContainer from '@/components/ConfirmContainer'
import { Center, Stack, VStack } from '@chakra-ui/react'

const Konfirmasi = () => {
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

export default Konfirmasi
