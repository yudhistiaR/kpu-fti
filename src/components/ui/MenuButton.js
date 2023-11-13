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
import cookie from '@/lib/utils/cookie'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'

const ButtonMenu = () => {
  const data = cookie()
  const route = useRouter()
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
          {data?.name}
        </MenuItem>
        <MenuItem icon={<GoDotFill size="15" />}>{data?.prodi}</MenuItem>
        <Link href="/dashboard">
          <MenuItem icon={<BiSolidDashboard size="15" />}>Dashboard</MenuItem>
        </Link>
        <MenuItem
          icon={<IoMdLogOut size="15" />}
          onClick={() => {
            deleteCookie('accessToken')
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
