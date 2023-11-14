import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';
import { SearchInputUsers } from './SearchInputUsers';

const NavBar = () => {
  return (
    <HStack borderTopRadius={'30px'} boxShadow={'dark-lg'}  padding='25px'  >
        <SearchInputUsers/>
    </HStack>
  );
}

export default NavBar