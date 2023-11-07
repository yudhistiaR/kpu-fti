import { Box } from '@chakra-ui/react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <Box bg="whiteAlpha.900" w="full" left="0" pos="fixed" boxShadow="2xl">
      <Box p="3">
        <Logo />
      </Box>
    </Box>
  )
}

export default Navbar
