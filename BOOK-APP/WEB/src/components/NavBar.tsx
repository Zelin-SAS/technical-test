import { Card, HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { ColorModeSwitch } from './ColorModeSwitch';
import { SearchInput } from './SearchInput';

const NavBar = () => {
  return (
    <Card borderTopRadius={'30px'} boxShadow='inner' mt={'40px'} ml={'40px'} mr={'10px'}>
    <HStack  justifyContent={'space-between'} marginTop={10} marginLeft={'77px'} marginRight={'40px'} paddingBottom='30px' >
        <Image src={logo} boxSize='80px' ml={2}/>
        <ColorModeSwitch/>
    </HStack>
    </Card>
  );
}

export default NavBar