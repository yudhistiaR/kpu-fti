'use client'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Tooltip,
  IconButton,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Center,
  useToast,
  useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/js/plugins/lists.min.js'
import 'froala-editor/js/plugins/fullscreen.min.js'
import 'froala-editor/js/plugins/font_size.min.js'
import 'froala-editor/js/plugins/char_counter.min.js'
import 'froala-editor/js/plugins/align.min.js'
import 'froala-editor/js/plugins/save.min.js'

const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'))

const FormStorePaslon = () => {
  const [image, setImage] = useState('')
  const [visiMisi, setVisiMisi] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitting }
  } = useForm()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()

  const route = useRouter()

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  const onSubmit = async data => {
    if (!image) {
      return
    }

    try {
      const formData = new FormData()
      formData.append('nama_paslon', data.nama_paslon)
      formData.append('no_urut', data.no_urut)
      formData.append('foto', image)
      formData.append('visi_misi', visiMisi)
      formData.append('type', data.type)

      await axios
        .post('/api/paslon', formData, {
          ContentType: 'multipart/form-data'
        })
        .then(
          toast({
            status: 'success',
            description: 'Data Berhasil Disimpan',
            title: 'Berhasil',
            position: 'top-right',
            containerStyle: {
              marginTop: '30px'
            }
          })
        )

      setImage('')
      onClose()

      route.refresh()
    } catch (error) {
      toast({
        status: 'error',
        description: 'Gagal Menambah Data',
        title: 'Invalid Store Data',
        position: 'top-right',
        containerStyle: {
          marginTop: '30px'
        }
      })
    }
  }

  return (
    <>
      <Tooltip
        openDelay={500}
        closeOnClick={false}
        placement="left"
        label="Tambah paslon"
      >
        <IconButton
          rounded="full"
          variant="solid"
          colorScheme="red"
          onClick={onOpen}
          pos="fixed"
          size="lg"
          bottom={10}
          right={4}
          icon={<AddIcon />}
        />
      </Tooltip>

      <Modal
        scrollBehavior="inside"
        motionPreset="slideInTop"
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        colorScheme="teal"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tambah pasangan calon</ModalHeader>
          <ModalCloseButton />
          <form
            style={{ overflowY: 'scroll' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <ModalBody>
              <Center pb={3}>
                <Image
                  alt="paslon-img"
                  src={image ? image : '/dummy_img.jpg'}
                  width={200}
                  height={200}
                />
              </Center>
              <Stack spacing={3}>
                <FormControl>
                  <CldUploadWidget
                    onSuccess={result => setImage(result.info.url)}
                    uploadPreset="kpu-fti-img"
                  >
                    {({ open }) => {
                      return (
                        <Button
                          width="full"
                          p="3"
                          colorScheme="teal"
                          size="xl"
                          onClick={() => open()}
                        >
                          Upload Image
                        </Button>
                      )
                    }}
                  </CldUploadWidget>
                </FormControl>
                <FormControl>
                  <FormLabel>Nama Paslon</FormLabel>
                  <Input {...register('nama_paslon')} required type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Nomor Urut</FormLabel>
                  <Input {...register('no_urut')} type="number" required />
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                  <Select
                    {...register('type')}
                    required
                    spacing={3}
                    placeholder="Pilih"
                  >
                    <option value="bem">Bem</option>
                    <option value="ti">Teknik Informatika</option>
                    <option value="si">Sistem Informasi</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Visi dan Misi</FormLabel>
                  <FroalaEditor
                    config={{
                      placeholderText: 'Tulis visi dan misi paslon',
                      charCounterCount: true,
                      charCounterMax: 1200,
                      saveInterval: 1000,
                      events: {
                        'save.before': function (html) {
                          setVisiMisi(html)
                        }
                      }
                    }}
                    tag="textarea"
                  />
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
                size="sm"
                mr={3}
              >
                {isSubmitting ? 'Loading' : 'Simpan'}
              </Button>
              <Button onClick={onClose} size="sm">
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormStorePaslon
