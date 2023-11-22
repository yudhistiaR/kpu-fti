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
import { useForm } from 'react-hook-form'

const FormLogin = () => {
  const {
    register,
    handleSubmit,

    formState: { isSubmitting }
  } = useForm()

  const toast = useToast()

  const [showPassword, setShowPasswrod] = useState(false)

  const handleShowPassword = () => setShowPasswrod(!showPassword)

  const path = useRouter()

  const onSubmit = async data => {
    const fd = new FormData()
    fd.append('username', data.username)
    fd.append('password', data.password)

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
            title: 'Valid Login',
            position: 'top-right',
            containerStyle: {
              marginTop: '30px'
            }
          })
          Cookies.set('accessToken', data.data.token, { expires: 7 })
        })

      path.push('/')
    } catch (err) {
      toast({
        status: 'error',
        description: 'Periksa kembali NPM dan Password anda',
        title: 'Invalid Login',
        position: 'top-right',
        containerStyle: {
          marginTop: '30px'
        }
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid columnGap="4" gap={6}>
        <GridItem>
          <FormControl>
            <Input
              variant="flushed"
              borderColor="blackAlpha.900"
              placeholder="NPM"
              focusBorderColor="#06989e"
              {...register('username')}
              type="text"
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
              {...register('password')}
              type={showPassword ? 'text' : 'password'}
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
          isLoading={isSubmitting}
        >
          {isSubmitting ? (
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
