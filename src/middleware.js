import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const middleware = async req => {
  const getCookies = cookies()
  const getAccessToken = getCookies.get('accessToken')?.value

  if (!getAccessToken) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/bilik/:path*']
}
