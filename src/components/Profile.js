'use client'

import { Text, Box } from '@chakra-ui/react'
import { getCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'

const Profile = () => {
  const token = getCookie('token')
  const data = jwt.decode(token, process.env.JWT_SECRET)

  return (
    <Box mt="2">
      <Text>NAMA : {data?.name ?? '-'} </Text>
      <Text>NPM : {data?.npm ?? '-'} </Text>
      <Text>PRODI : {data?.prodi ?? '-'} </Text>
    </Box>
  )
}

export default Profile
