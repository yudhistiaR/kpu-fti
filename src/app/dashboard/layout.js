import { Box } from '@chakra-ui/react'

const DashboardLayout = ({ children }) => {
  return (
    <Box minH="100vh" w="full" pt="20">
      {children}
    </Box>
  )
}

export default DashboardLayout
