import { NextRequest } from 'next/server'

export const POST = async (request, response) => {
  const req = await request.formData()

  const nama_paslon = req.get('nama_paslon')
  const no_paslon = req.get('no_paslon')
}
