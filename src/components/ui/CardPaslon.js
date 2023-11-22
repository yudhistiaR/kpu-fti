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
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'

import { fetchPaslon } from '@/hooks/useFetch'
import VotingAlert from '../alert/VotingAlert'

const CardPaslon = () => {
  const params = useParams()
  const [datas, setData] = useState(null)

  const getPaslon = async argn => {
    try {
      const res = await fetchPaslon(argn)
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPaslon(params.type)
  }, [params.type])

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
            <Box px={4}>
              <FroalaEditorView model={data.visi_misi} />
            </Box>
          </CardBody>
          <CardFooter>
            <VotingAlert paslonId={data.id} type={params.type} />
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default CardPaslon
