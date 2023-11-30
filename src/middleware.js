import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const middleware = async req => {
  const token = cookies().get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
}

export const config = {
  matcher: ['/', '/bilik/:path*']
}
