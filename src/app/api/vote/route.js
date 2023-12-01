import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const POST = async request => {
  const auth = request.headers.get('authorization').split('Bearer ').at(1)

  if (!auth)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const decoded = jwt.verify(auth, process.env.JWT_SECRET)

  const { npm } = decoded

  const formData = await request.formData()
  const paslonId = formData.get('paslonId')
  const type = formData.get('type')

  console.log(type)

  try {
    let status = {}

    if (type === 'si' || type === 'ti') {
      status = {
        status_hmp: true
      }
    } else if (type === 'bem') {
      status = {
        status_bem: true
      }
    } else {
      status = {
        status_hmp: false,
        status_bem: false
      }
    }

    const dataUser = await prisma.pemilih.findFirst({
      where: {
        npm: npm
      }
    })

    await prisma.transaction.create({
      data: {
        pemilih_id: dataUser.id,
        paslon_id: paslonId
      }
    })

    await prisma.pemilih.update({
      where: {
        id: dataUser.id
      },
      data: status
    })

    return NextResponse.json(
      { success: 'Berhasil melakukan voting' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
