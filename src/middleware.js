import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const middleware = async req => {
  const getCookies = cookies()
  const getAccessToken = getCookies.get('accessToken')?.value

  if (req.url.includes('/konfirmasi')) {
    if (!getAccessToken) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    return NextResponse.next()
  }
  if (req.url.includes('/auth/login')) {
    if (getAccessToken) {
      return NextResponse.redirect(new URL('/konfirmasi', req.url))
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/konfirmasi', '/si/', '/ti/', '/auth/login']
}
