'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box,
  Stack,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import { getCookie } from 'cookies-next'
import { fetchPaslonBem } from '@/hooks/useFetch'
import VotingAlert from '@/components/alert/VotingAlert'

const BilikBem = () => {
  const token = getCookie('token')
  const [datas, setData] = useState(null)

  useEffect(() => {
    const getPaslon = async () => {
      try {
        const res = await fetchPaslonBem(token)
        setData(res)
      } catch (error) {
        console.log(error)
      }
    }

    getPaslon()
  }, [])

  return (
    <Box h="100vh" pt="20" overflowY="scroll">
      <Stack>
        <VStack>
          {datas?.map(data => (
            <Card boxShadow="lg" w="full" key={data.id}>
              <CardHeader>
                <Heading size="md">Paslon Nomor {data.no_urut}</Heading>
              </CardHeader>
              <CardBody>
                <Box align="center" w="full" mb={3}>
                  <Image
                    alt="profile"
                    width={500 * 2}
                    height={150 * 2}
                    src={data.foto}
                    style={{ borderRadius: 10 }}
                  />
                </Box>
                <Box my={3}>
                  <Text fontSize="lg" fontWeight="semibold">
                    Nama : <i>{data.nama_paslon}</i>
                  </Text>
                </Box>
                <Box px={4}>{parse(data.visi_misi)}</Box>
              </CardBody>
              <CardFooter>
                <VotingAlert paslonId={data.id} type={data.type} />
              </CardFooter>
            </Card>
          ))}
        </VStack>
      </Stack>
    </Box>
  )
}

export default BilikBem
