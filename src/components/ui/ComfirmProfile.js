import {
  Stack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text
} from '@chakra-ui/react'
import Profile from '../Profile'
import ConfirmButton from '../ConfirmButton'
import cookie from '@/lib/utils/cookie'

const ConfirmProfile = async () => {
  const getCookie = await cookie()

  return (
    <Card boxShadow="xl">
      <CardHeader>
        <Stack>
          <HStack align="center">
            <Heading size="md">Konfirmasi Data diri</Heading>
          </HStack>
        </Stack>
      </CardHeader>
      <CardBody>
        <Text fontWeight="semibold">
          Pastikakan data diri anda dibawah ini benar dan sesuai, data akan
          digunakan sebagai indetitas pemilih Pemilu Raya FTI UNISKA Tahun 2023
        </Text>
        <Profile />
      </CardBody>
      <CardFooter>
        <ConfirmButton data={getCookie} />
      </CardFooter>
    </Card>
  )
}

export default ConfirmProfile
