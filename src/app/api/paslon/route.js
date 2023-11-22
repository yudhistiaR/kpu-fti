import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  const formData = await request.formData()

  try {
    const nama_paslon = formData.get('nama_paslon')
    const no_urut = formData.get('no_urut')
    const foto = formData.get('foto')
    const visi_misi = formData.get('visi_misi')
    const type = formData.get('type')

    await prisma.paslon.create({
      data: {
        nama_paslon: nama_paslon,
        no_urut: no_urut,
        foto: foto,
        visi_misi: visi_misi,
        type: type
      }
    })

    return NextResponse.json(
      { message: 'Paslon Berhasil Ditambahkan' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const getType = searchParams.get('type')

  try {
    if (getType) {
      const data = await prisma.paslon.findMany({
        where: {
          type: getType
        }
      })
      return NextResponse.json(data, { status: 200 })
    } else {
      const data = await prisma.paslon.findMany()
      return NextResponse.json(data, { status: 200 })
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
