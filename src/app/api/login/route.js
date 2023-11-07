import { NextResponse } from 'next/server'
import axios from 'axios'
import * as jose from 'jose'
import { cookies } from 'next/headers'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  const setCookies = cookies()
  const req = await request.formData()
  const npm = req.get('username')
  const password = req.get('password')

  try {
    const req = await axios.post(
      `https://ta.fti.uniska-bjm.ac.id/api/v1/login`,
      {
        username: npm,
        password: password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const user = req.data.data

    const { userid, nama, kode_prodi } = user

    const prodi =
      kode_prodi == '57201' ? 'Sistem Informasi' : 'Teknik Informasi'

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)

    const jwt = await new jose.SignJWT({
      userid: userid,
      name: nama,
      prodi: prodi
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7d')
      .sign(secret)

    const verify = await prisma.pemilih.findFirst({
      where: {
        npm: userid
      }
    })

    if(verify){
      setCookies.set('vertivication', false)
    } else {
      setCookies.set('vertivication', true)
    }

    return NextResponse.json(
      {
        user: {
          ...user,
          prodi: prodi
        },
        token: jwt
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}
