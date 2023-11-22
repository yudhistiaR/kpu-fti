import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const POST = async request => {
  const formData = await request.formData()

  const npm = formData.get('npm')
  const paslonId = formData.get('paslonId')
  const type = formData.get('type')

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
