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
  Textarea,
  Select,
  useDisclosure
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

const FormStorePaslon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <ModalBody pb={6}>
            <form>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input type="file" />
                </FormControl>
                <FormControl>
                  <FormLabel>Nama Paslon</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Nomor Urut</FormLabel>
                  <Input type="text" />
                </FormControl>
                <FormControl>
                  <FormLabel>Visi</FormLabel>
                  <Textarea />
                </FormControl>
                <FormControl>
                  <FormLabel>Misi</FormLabel>
                  <Textarea />
                </FormControl>
                <FormControl>
                  <FormLabel>Type</FormLabel>
                  <Select spacing={3}>
                    <option>Bem</option>
                    <option>Teknik Informatika</option>
                    <option>Sistem Informasi</option>
                  </Select>
                </FormControl>
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" size="sm" mr={3}>
              Simpan
            </Button>
            <Button onClick={onClose} size="sm">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FormStorePaslon
