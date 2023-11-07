import * as jose from 'jose'
import { cookies } from 'next/headers'

const cookie = async () => {
  const getCookie = cookies()

  const accessToken = getCookie.get('accessToken')?.value

  const secret = new TextEncoder().encode(process.env.JWT_SECRET)

  const decoded = await jose.jwtVerify(accessToken, secret)

  const { userid, name, prodi } = decoded.payload

  return { userid, name, prodi }
}

export default cookie
