import { Box } from '@chakra-ui/react'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

const DashboardLayout = async ({ children }) => {
  const token = cookies().get('token')?.value

  const { role } = jwt.decode(token, process.env.JWT_SECRET)

  if (role !== 'Pengurus') {
    redirect('/')
  }

  return (
    <Box minH="100vh" w="full" pt="20">
      {children}
    </Box>
  )
}

export default DashboardLayout
