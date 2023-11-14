import { HStack, Image, Text } from '@chakra-ui/react'
import { SearchInput } from './SearchInput';

const NavBar = () => {
  return (
    <HStack borderTopRadius={'30px'} boxShadow={'dark-lg'}  padding='45px'  >
        <SearchInput/>
    </HStack>
  );
}

export default NavBar