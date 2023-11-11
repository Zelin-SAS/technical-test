import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px'/>
    </HStack>
  );
}

export default NavBar