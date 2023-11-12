import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

const NavBar = () => {
  return (
    <HStack boxShadow={'dark-lg'}  marginTop={10} marginLeft={'77px'} marginRight={'40px'} padding='15px' borderRadius={50} >
        <Image src={logo} boxSize='60px' ml={2}/>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar