'use client'

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  Center,
  Text,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Tfoot,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const FroalaEditorView = dynamic(() =>
  import('react-froala-wysiwyg/FroalaEditorView')
)

import { TbFilterSearch } from 'react-icons/tb'
import types from '@/lib/utils/types'

import { fetchPaslon } from '@/hooks/useFetch'
import { getCookie } from 'cookies-next'

const StorePaslon = () => {
  const token = getCookie('token')
  const [datas, setData] = useState(null)

  useEffect(() => {
    const getPaslon = async () => {
      try {
        const res = await fetchPaslon(token)
        setData(res)
      } catch (error) {
        console.log(error)
      }
    }

    getPaslon()
  }, [token])

  const handleFilter = async type => {
    if (type === 'si') {
      const data = await fetchPaslon(token)

      const si = data.filter(el => el.type === 'si')

      setData(si)
    }

    if (type === 'ti') {
      const data = await fetchPaslon(token)

      const ti = data.filter(el => el.type === 'ti')

      setData(ti)
    }

    if (type === 'bem') {
      const data = await fetchPaslon(token)

      const bem = data.filter(el => el.type === 'bem')

      setData(bem)
    }

    if (type === 'all') {
      const data = await fetchPaslon(token)
      setData(data)
    }
  }

  return (
    <Accordion w="full" allowMultiple>
      <Menu>
        <MenuButton
          mb={3}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: 'teal', color: 'white' }}
          _expanded={{ bg: 'teal', color: 'white' }}
          _focus={{ boxShadow: 'outline' }}
          as={IconButton}
          icon={<TbFilterSearch />}
          size="sm"
        >
          Kazumi
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => handleFilter('all')}>All</MenuItem>
          <MenuItem onClick={() => handleFilter('si')}>
            Sistem Informasi
          </MenuItem>
          <MenuItem onClick={() => handleFilter('ti')}>
            Teknik Informatika
          </MenuItem>
          <MenuItem onClick={() => handleFilter('bem')}>BEM</MenuItem>
        </MenuList>
      </Menu>

      {datas?.map(el => (
        <AccordionItem key={el.id}>
          <h2>
            <AccordionButton _expanded={{ bg: '#06989e', color: '#fff' }}>
              <Box as="span" flex="1" textAlign="left">
                {`Paslon No ${el.no_urut}`}
                {'  '}
                <Badge colorScheme={types(el.type).BadgeColor}>
                  {types(el.type).info}
                </Badge>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Center pb={2}>
              <Image alt="paslon" src={el.foto} width={300} height={300} />
            </Center>
            <TableContainer maxW="100%">
              <Table variant="striped" size="md" colorScheme="teal">
                <Tbody>
                  <Tr>
                    <Td>
                      <Text fontSize="md" fontWeight="semibold">
                        Nama : {el.nama_paslon}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text fontSize="md" fontWeight="semibold">
                        No Urut : {el.no_urut}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text fontSize="md" fontWeight="semibold">
                        Prodi : {types(el.type).info}
                      </Text>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text fontSize="md">
                        <FroalaEditorView model={el.visi_misi} />
                      </Text>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td>
                      <Button mr={2} colorScheme="teal" size="sm">
                        Hapus
                      </Button>
                      <Button colorScheme="gray" size="sm">
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default StorePaslon
