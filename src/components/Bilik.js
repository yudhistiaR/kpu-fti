import { Button, Center, Stack, VStack } from '@chakra-ui/react'
import Link from 'next/link'

const Bilik = () => {
  return (
    <Center w="full">
      <Stack w="full">
        <VStack>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="purple">
            <Link href="/bilik/bem">Bilik BEM FTI</Link>
          </Button>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="blue">
            <Link href="/bilik">Bilik HIMPUNAN FTI</Link>
          </Button>
        </VStack>
      </Stack>
    </Center>
  )
}

export default Bilik
