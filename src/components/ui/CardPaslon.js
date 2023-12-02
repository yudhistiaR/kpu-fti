'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Box
} from '@chakra-ui/react'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next'
import { fetchPaslon } from '@/hooks/useFetch'
import { useDecoded } from '@/hooks/useDecoded'
import VotingAlert from '../alert/VotingAlert'

const CardPaslon = () => {
  const token = getCookie('token')
  const [datas, setData] = useState(null)

  const { prodi } = useDecoded(token)

  useEffect(() => {
    const getPaslon = async () => {
      try {
        if (prodi == 'Sistem Informasi') {
          const res = await fetchPaslon(token, 'si')
          setData(res)
        } else if (prodi == 'Teknik Informatika') {
          const res = await fetchPaslon(token, 'ti')
          setData(res)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getPaslon()
  }, [token, prodi])

  return (
    <>
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
    </>
  )
}

export default CardPaslon
