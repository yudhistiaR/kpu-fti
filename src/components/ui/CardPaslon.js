'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Center,
  Stack,
  VStack,
  Box
} from '@chakra-ui/react'
import Image from 'next/image'
import profile from '../../../public/profileCheck.jpg'

const CardPaslon = () => {
  return (
    <Card w="full">
      <CardHeader>
        <Heading size="md">Paslon Nomor 1</Heading>
      </CardHeader>
      <CardBody>
        <Center>
          <Stack>
            <VStack>
              <Box>
                <Image alt="profile" width={150} height={150} src={profile} />
              </Box>
              <Box>
                <Heading size="sm" textAlign="center">
                  Visi
                </Heading>
                <Text align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </Text>
              </Box>
              <Box>
                <Heading size="sm" textAlign="center">
                  Misi
                </Heading>
                <Text align="justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </Box>
            </VStack>
          </Stack>
        </Center>
      </CardBody>
      <CardFooter gap={1}>
        <Button colorScheme="blue" w="full">
          Detail
        </Button>
        <Button colorScheme="teal" w="full">
          Vote
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardPaslon
