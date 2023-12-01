import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const GET = async request => {
  const auth = request.headers.get('authorization').split('Bearer ').at(1)

  if (!auth)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const bem = await prisma.paslon.findMany({
    where: {
      type: 'bem'
    },
    include: {
      pemilih: true
    }
  })

  const si = await prisma.paslon.findMany({
    where: {
      type: 'si'
    },
    include: {
      pemilih: true
    }
  })

  const ti = await prisma.paslon.findMany({
    where: {
      type: 'ti'
    },
    include: {
      pemilih: true
    }
  })

  return NextResponse.json({ bem, ti, si }, { status: 200 })
}
