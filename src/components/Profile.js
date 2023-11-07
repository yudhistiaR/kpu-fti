import { Text, Box } from '@chakra-ui/react'
import { cookies } from 'next/headers'
import * as jose from 'jose'

const Profile = async () => {
  const cookie = cookies()

  const getAccess = cookie.get('accessToken')?.value

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const decoded = await jose.jwtVerify(getAccess, secret)

  const { userid, name, prodi } = decoded.payload

  return (
    <Box mt="2">
      <Text>NAMA : {name} </Text>
      <Text>NPM : {userid} </Text>
      <Text>PRODI : {prodi} </Text>
    </Box>
  )
}

export default Profile
