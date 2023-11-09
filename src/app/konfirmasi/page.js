import ConfirmContainer from '@/components/ConfirmContainer'
import { Center, Stack, VStack } from '@chakra-ui/react'

const Konfirmasi = async () => {
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
