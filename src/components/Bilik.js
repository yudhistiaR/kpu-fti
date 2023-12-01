import { Button, Center, Stack, VStack } from '@chakra-ui/react'
import Link from 'next/link'

const Bilik = () => {
  return (
    <Center w="full">
      <Stack w="full">
        <VStack>
          <Link href="/bilik/bem">
            <Button w="full" boxShadow="xl" size="lg" colorScheme="purple">
              Bilik BEM FTI
            </Button>
          </Link>
          <Link href="/bilik">
            <Button w="full" boxShadow="xl" size="lg" colorScheme="blue">
              Bilik HIMPUNAN FTI
            </Button>
          </Link>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="green">
            <Link href="/stats">Hasil Poling Suara</Link>
          </Button>
        </VStack>
      </Stack>
    </Center>
  )
}

export default Bilik
