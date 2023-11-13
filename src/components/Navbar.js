'use client'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import Logo from './Logo'
import ButtonMenu from './ui/MenuButton'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [show, setShow] = useState(true)

  const path = usePathname()

  useEffect(() => {
    if (path === '/auth/login') {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [path])

  return (
    <Box
      bg="whiteAlpha.900"
      w="full"
      left="0"
      pos="fixed"
      zIndex="1000"
      boxShadow="2xl"
      p="3"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Logo />
        </Box>
        <Spacer />
        {show ? (
          <Box>
            <ButtonMenu />
          </Box>
        ) : null}
      </Flex>
    </Box>
  )
}

export default Navbar
