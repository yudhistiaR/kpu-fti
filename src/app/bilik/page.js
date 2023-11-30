'use client'

import { Box, Stack, VStack } from '@chakra-ui/react'
import CardPaslon from '@/components/ui/CardPaslon'

const PemilihanPage = () => {
  return (
    <Box h="100vh" pt="20" overflowY="scroll">
      <Stack>
        <VStack>
          <CardPaslon />
        </VStack>
      </Stack>
    </Box>
  )
}

export default PemilihanPage
