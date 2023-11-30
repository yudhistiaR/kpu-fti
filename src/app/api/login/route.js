import { NextResponse } from 'next/server'
import axios from 'axios'
import { cookies } from 'next/headers'

import jwt from 'jsonwebtoken'

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

    //userid return NPM
    const { userid, nama, kode_prodi } = user

    const prodi =
      kode_prodi == '57201' ? 'Sistem Informasi' : 'Teknik Informatika'

    const verify = await prisma.pemilih.findFirst({
      where: {
        npm: userid
      }
    })

    const token = jwt.sign(
      {
        npm: userid,
        name: nama,
        prodi: prodi,
        role: verify?.role === 'Pengurus' ? 'Pengurus' : 'Mahasiswa'
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    if (verify) {
      setCookies.set('vertivication', true)
    } else {
      setCookies.set('vertivication', false)
    }

    return NextResponse.json(
      {
        user: {
          ...user,
          prodi: prodi
        },
        token: token
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}
