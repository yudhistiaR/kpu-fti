import { Box, Stack, VStack } from '@chakra-ui/react'
import CardPaslon from '@/components/ui/CardPaslon'

const SiPage = () => {
  return (
    <Box h="100vh" pt="20" overflowY="scroll">
      <Stack>
        <VStack>
          <CardPaslon />
          <CardPaslon />
          <CardPaslon />
          <CardPaslon />
          <CardPaslon />
        </VStack>
      </Stack>
    </Box>
  )
}

export default SiPage
