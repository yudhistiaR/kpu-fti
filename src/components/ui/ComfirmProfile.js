import {
  Stack,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import Profile from '../Profile'
import ConfirmButton from '../ConfirmButton'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

const ConfirmProfile = () => {
  const router = useRouter()

  return (
    <Card boxShadow="xl" backgroundColor={'white'}>
      <CardHeader>
        <Stack>
          <HStack align="center">
            <Heading size="lg">Konfirmasi Data diri</Heading>
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
      <CardFooter gap={2}>
        <ConfirmButton />
        <Button
          onClick={() => {
            deleteCookie('vertivication')
            deleteCookie('accessToken')
            router.push('/auth/login')
          }}
          colorScheme="red"
        >
          Batal
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ConfirmProfile
