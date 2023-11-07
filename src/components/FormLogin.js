'use client'

import {
  Input,
  Grid,
  GridItem,
  FormControl,
  Button,
  InputGroup,
  InputRightElement,
  Spinner,
  useToast
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { useUserAuth } from '@/store/useUserAuth'

const FormLogin = () => {
  const [storeData, setStoreData] = useState({
    username: '',
    password: ''
  })

  const toast = useToast()

  const { set } = useUserAuth()

  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPasswrod] = useState(false)

  const handleChange = prop => e => {
    setStoreData({ ...storeData, [prop]: e.target.value })
  }

  const handleShowPassword = () => setShowPasswrod(!showPassword)

  const path = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)

    const fd = new FormData()
    fd.append('username', storeData.username)
    fd.append('password', storeData.password)

    try {
      await axios
        .post('/api/login', fd, {
          headers: {
            Accept:
              'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(data => {
          toast({
            status: 'success',
            description: 'Login berhasil',
            title: 'Berhasil',
            position: 'top-right'
          })
          Cookies.set('accessToken', data.data.token, { expires: 7 })
          console.log(data)
          set({
            token: data.data.token,
            user: {
              userid: data.data.user.userid,
              name: data.data.user.nama,
              prodi: data.data.user.prodi
            }
          })
          setLoading(false)
          path.push('/konfirmasi')
        })

      
    } catch (err) {
      setLoading(false)
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <Grid columnGap="4" gap={6}>
        <GridItem>
          <FormControl>
            <Input
              borderColor="blackAlpha.900"
              placeholder="NPM"
              variant="flushed"
              focusBorderColor="#06989e"
              type="text"
              onChange={handleChange('username')}
              required
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <InputGroup size="md">
            <Input
              variant="flushed"
              borderColor="blackAlpha.900"
              placeholder="Password"
              focusBorderColor="#06989e"
              onChange={handleChange('password')}
              type={showPassword ? 'text' : 'password'}
              required
            />
            <InputRightElement width="4.5rem">
              <Button h="1.78rem" size="md" onClick={handleShowPassword}>
                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
        </GridItem>
        <Button
          type="submit"
          variant="solid"
          colorScheme="teal"
          disabled={loading}
        >
          {loading ? (
            <Spinner
              thickness="3px"
              emptyColor="gray"
              speed="0.90s"
              color="with"
              size="md"
            />
          ) : (
            'Login'
          )}
        </Button>
      </Grid>
    </form>
  )
}

export default FormLogin
