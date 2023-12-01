'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useToast
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useRef, useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { fetchPemilih } from '@/hooks/useFetch'

function VotingAlert(props) {
  const token = getCookie('token')

  const { paslonId, type } = props

  const [loading, setLoading] = useState(false)
  const [statusVote, setStatusVote] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const route = useRouter()

  const toast = useToast()

  useEffect(() => {
    const getUser = async () => {
      const pemilih = await fetchPemilih(token)

      const { status_hmp, status_bem, role } = pemilih

      if (type === 'bem') {
        if (status_bem) {
          setStatusVote(true)
        } else if (role === 'Pengurus') {
          setStatusVote(true)
        } else {
          setStatusVote(false)
        }
      }

      if (type === 'si' || type === 'ti') {
        if (status_hmp) {
          setStatusVote(true)
        } else if (role === 'Pengurus') {
          setStatusVote(true)
        } else {
          setStatusVote(false)
        }
      }
    }

    getUser()
  }, [route, token, type])

  const handleClick = async () => {
    setLoading(true)

    const fd = new FormData()
    fd.append('paslonId', paslonId)
    fd.append('type', type)

    try {
      await fetch('/api/vote', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        ContentType: 'multipart/form-data',
        body: fd
      })
      toast({
        status: 'success',
        description: 'Berhasil melakukan voting',
        title: 'Horee...',
        position: 'top-right',
        containerStyle: {
          marginTop: '30px'
        }
      })

      onClose()
      route.back()
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <>
      <Button
        isDisabled={statusVote}
        isLoading={loading}
        onClick={onOpen}
        w="full"
        colorScheme="teal"
        size="md"
      >
        Vote
      </Button>
      <AlertDialog
        motionPreset="slideInTop"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size="sm"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Informasi</AlertDialogHeader>
          <AlertDialogBody>
            Apakah anda yakin ingin melakukan voting?, Voting hanya dapat
            dilakukan sekali disetiap bilik.
          </AlertDialogBody>
          <AlertDialogFooter spacing={2}>
            <Button
              isLoading={loading}
              onClick={handleClick}
              colorScheme="teal"
              size="sm"
              mr={3}
            >
              Ya
            </Button>
            <Button ref={cancelRef} size="sm" onClick={onClose}>
              Tidak
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default VotingAlert
