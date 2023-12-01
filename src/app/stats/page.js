import Chart from '@/components/ui/Chart'
import { Box } from '@chakra-ui/react'
import React from 'react'

const page = () => {
  return (
    <Box minH="100vh" bg={'white'} w="full" pt="100" pb={50}>
      <Chart />
    </Box>
  )
}

export default page
