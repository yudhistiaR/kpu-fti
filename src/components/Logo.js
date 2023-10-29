import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import mainLogo from '../../public/logoKpu.png'

const Logo = () => {
  return (
    <Link href="/">
      <Flex align="center" gap="1">
        <Image width={45} src={mainLogo} alt="logo-kpu-fti" />
        <Flex flexDirection="column" align="start">
          <Text lineHeight={1} fontWeight="semibold">
            KPU FTI
          </Text>
          <Text lineHeight={1} fontWeight="semibold">
            UNISKA
          </Text>
        </Flex>
      </Flex>
    </Link>
  )
}

export default Logo
