'use client'
import { Box, VStack } from '@chakra-ui/react'
import PieChart from '../Pie'
import BarChart from '../Bar'

const Chart = () => {
  return (
    <Box>
      <VStack spacing={8}>
        <PieChart />
        <BarChart />
      </VStack>
    </Box>
  )
}

export default Chart
