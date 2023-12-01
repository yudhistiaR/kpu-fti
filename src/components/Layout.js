'use client'

import { Container } from '@chakra-ui/react'

const MainLayout = ({ children }) => {
  return (
    <Container minH="100vh" maxW="md" bg="#06989e">
      {children}
    </Container>
  )
}

export default MainLayout
