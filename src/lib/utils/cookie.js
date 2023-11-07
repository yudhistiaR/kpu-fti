import { getCookie } from 'cookies-next'
import { jwtDecode } from 'jwt-decode'

const cookie = () => {
  const token = getCookie('accessToken')

  if (!token) return null

  const decoded = jwtDecode(token)

  const { userid, name, prodi } = decoded

  return { userid, name, prodi }
}

export default cookie
