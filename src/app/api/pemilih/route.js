import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const POST = async request => {
  const req = await request.formData()

  const npm = req.get('npm')
  const name = req.get('name')
  const prodi = req.get('prodi')

  try {
    await prisma.pemilih.create({
      data: {
        npm: npm,
        name: name,
        prodi: prodi
      }
    })

    return NextResponse.json(
      { message: 'Store data successfully' },
      { status: 201 }
    )
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}

export const GET = async request => {
  const auth = request.headers.get('authorization').split('Bearer ').at(1)

  const decoded = jwt.verify(auth, process.env.JWT_SECRET)

  const { npm } = decoded

  try {
    const user = await prisma.pemilih.findFirst({
      where: {
        npm: npm
      }
    })
    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}
