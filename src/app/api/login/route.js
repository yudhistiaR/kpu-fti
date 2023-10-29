import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function POST(request) {
  const req = await request.formData()

  try {
    const npm = req.get('npm')
    const password = req.get('password')

    const user = await prisma.user.findFirst({
      where: {
        npm: npm
      }
    })

    const match = await bcrypt.compare(password, user.password)

    if (!match)
      return NextResponse.json(
        { message: 'Password not match' },
        { status: 403 }
      )

    const token = jwt.sign(
      { id: user.id, npm: user.npm, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d'
      }
    )

    /**
    const accessToken = jwt.sign(
      { id: user.id, npm: user.npm, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: '20s'
      }
    )
       */

    await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        token: token
      }
    })

    return NextResponse.json({ message: 'Login Success' }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}
