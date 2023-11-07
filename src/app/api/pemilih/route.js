import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async request => {
  const req = await request.formData()

  const name = req.get('name')
  const npm = req.get('npm')
  const prodi = req.get('prodi')

  try {
    await prisma.pemilih.create({
      data: {
        name: name,
        npm: npm,
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

export const GET = async req => {
  const { searchParams } = new URL(req.url)
  const param = searchParams.get('npm')

  try {
    if (param) {
      const user = await prisma.pemilih.findFirst({
        where: {
          npm: param
        }
      })
      return NextResponse.json({ data: user }, { status: 200 })
    } else {
      const allUser = await prisma.pemilih.findMany()
      return NextResponse.json({ datas: allUser }, { status: 200 })
    }
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 500 })
  }
}
