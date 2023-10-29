import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(request) {
  const req = await request.formData()

  try {
    const npm = req.get('npm')
    const name = req.get('name')
    const prodi = req.get('prodi')
    const password = req.get('password')
    const confPassword = req.get('confPassword')

    const checkNpm = await prisma.user.findFirst({
      where: {
        npm
      }
    })

    if (npm === checkNpm.npm) {
      return NextResponse.json(
        { message: 'NPM already in use' },
        {
          status: 403
        }
      )
    }

    if (password !== confPassword) {
      return NextResponse.json(
        { message: 'Password and confirm password not match' },
        {
          status: 403
        }
      )
    }

    const slat = await bcrypt.genSalt()
    const hashPasswod = await bcrypt.hash(password, slat)

    await prisma.user.create({
      data: {
        npm: npm,
        name: name,
        prodi: prodi,
        password: hashPasswod
      }
    })
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }

  return NextResponse.json({ message: 'Register Successfuly' }, { status: 200 })
}