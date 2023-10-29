import { Box, Text } from '@chakra-ui/react'
import FormLogin from '../FormLogin'
import Link from 'next/link'

const Login = () => {
  return (
    <Box bg="whiteAlpha.900" w="full" rounded="lg" p="4" boxShadow="2xl">
      <Text mb="4" fontSize="2xl">
        Login
      </Text>
      <FormLogin />
      <Box mt="3" textAlign="center">
        Belum memiliki akun?
        <Link style={{ color: '#06990e' }} href="/auth/register">
          Daftar
        </Link>
      </Box>
    </Box>
  )
}

export default Login
