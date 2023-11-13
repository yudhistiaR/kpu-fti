import { uploadImage } from '@/lib/utils/cloudinary'

export const POST = async (request, response) => {
  const req = await request.formData()

  const img = req.get('foto')

  const d = await uploadImage(img)

  console.log(d)
}
