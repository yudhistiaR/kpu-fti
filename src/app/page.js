import { Center, Stack, VStack } from '@chakra-ui/react'
import Bilik from '@/components/Bilik'
import ConfirmProfile from '@/components/ui/ComfirmProfile'
import { cookies } from 'next/headers'

const Home = () => {
  const cookie = cookies()
  const vertfy = cookie.get('vertivication')?.value

  return (
    <Center minH="100vh">
      <Stack>
        <VStack>
          {vertfy ? <ConfirmProfile /> : null}
          <Bilik />
        </VStack>
      </Stack>
    </Center>
  )
}

export default Home
