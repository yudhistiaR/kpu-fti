'use client'

import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { BiMenuAltLeft, BiSolidDashboard } from 'react-icons/bi'
import { IoMdLogOut } from 'react-icons/io'
import { GoDotFill } from 'react-icons/go'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import Link from 'next/link'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next'
import { fetchPemilih } from '@/hooks/useFetch'

const ButtonMenu = () => {
  const token = getCookie('token')

  const [datas, setDatas] = useState()

  const route = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const res = await fetchPemilih(token)
      setDatas(res)
    }

    getUser()
  }, [])

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<BiMenuAltLeft size="35" />}
        size="md"
        colorScheme="blue"
        variant="ghost"
      />
      <MenuList>
        <MenuItem icon={<MdDriveFileRenameOutline size="15" />}>
          {datas?.name}
        </MenuItem>
        <MenuItem icon={<GoDotFill size="15" />}>{datas?.prodi}</MenuItem>
        {datas?.role === 'Pengurus' ? (
          <Link href="/dashboard">
            <MenuItem icon={<BiSolidDashboard size="15" />}>Dashboard</MenuItem>
          </Link>
        ) : null}
        <MenuItem
          icon={<IoMdLogOut size="15" />}
          onClick={() => {
            deleteCookie('token')
            deleteCookie('vertivication')
            route.push('/auth/login')
          }}
        >
          Keluar
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ButtonMenu
