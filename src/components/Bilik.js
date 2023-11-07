import { Button, Center, Stack, VStack } from '@chakra-ui/react'

const Bilik = () => {
  return (
    <Center w="full">
      <Stack w="full">
        <VStack>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="purple">
            Bilik BEM FTI
          </Button>
          <Button w="full" boxShadow="xl" size="lg" colorScheme="blue">
            Bilik HIMPUNAN FTI
          </Button>
        </VStack>
      </Stack>
    </Center>
  )
}

export default Bilik
