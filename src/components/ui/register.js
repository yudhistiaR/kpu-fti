import { Box, Text } from '@chakra-ui/react'
import FormRegister from '../FormRegister'
import Link from 'next/link'

const Register = () => {
  return (
    <Box bg="whiteAlpha.900" w="full" rounded="lg" p="4" boxShadow="2xl">
      <Text mb="4" fontSize="2xl">
        Daftar
      </Text>
      <FormRegister />
      <Box mt="3" textAlign="center">
        Sudah memiliki akun?
        <Link style={{ color: '#06990e' }} href="/auth/login">
          Login
        </Link>
      </Box>
    </Box>
  )
}

export default Register
