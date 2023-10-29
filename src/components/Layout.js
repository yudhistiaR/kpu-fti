import { Container } from '@chakra-ui/react'
import Navbar from './Navbar'

const MainLayout = ({ children }) => {
  return (
    <Container maxW="md" minH="100vh" bg="#06989e">
      <Navbar />
      {children}
    </Container>
  )
}

export default MainLayout
