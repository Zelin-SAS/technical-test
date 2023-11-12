import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { ColorModeSwitch } from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack boxShadow={'dark-lg'} justifyContent='space-between' marginTop={10} marginLeft={'77px'} marginRight={'40px'} padding='10px' borderRadius={15} >
        <Image src={logo} boxSize='60px' ml={2}/>
        <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar