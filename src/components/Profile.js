import { Text, Box } from '@chakra-ui/react'
import cookie from '@/lib/utils/cookie'

const Profile = () => {
  const data = cookie()

  return (
    <Box mt="2">
      <Text>NAMA : {data?.name ?? '-'} </Text>
      <Text>NPM : {data?.userid ?? '-'} </Text>
      <Text>PRODI : {data?.prodi ?? '-'} </Text>
    </Box>
  )
}

export default Profile
