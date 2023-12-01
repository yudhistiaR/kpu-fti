import { Spinner, Center } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Center minH="100vh">
      <Spinner
        thickness="5px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#06989e"
        size="xl"
      />
    </Center>
  )
}

export default Loading
