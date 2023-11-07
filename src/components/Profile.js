import cookie from '@/lib/utils/cookie'
import { Text, Box } from '@chakra-ui/react'

const Profile = () => {
  
  const {name, prodi, userid} = cookie()

  return (
    <Box mt="2">
      <Text>NAMA : {name} </Text>
      <Text>NPM : {userid} </Text>
      <Text>PRODI : {prodi} </Text>
    </Box>
  )
}

export default Profile
