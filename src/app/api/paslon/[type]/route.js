import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async (request, { params }) => {
  const auth = await request.headers.get('authorization').split('Bearer ').at(1)
  if (!auth) return NextResponse.json({ message: 'Unauthorized' })

  const type = params.type

  try {
    if (type) {
      const datas = await prisma.paslon.findMany({
        where: {
          type: type
        }
      })
      return NextResponse.json(datas, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
