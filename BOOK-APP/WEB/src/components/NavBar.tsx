import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

const NavBar = () => {
  return (
    <Card
      borderTopRadius={"30px"}
      boxShadow="inner"
      mt={"40px"}
      ml={"10px"}
      mr={"10px"}
    >
      <HStack
        justifyContent={"space-between"}
        marginTop={10}
        paddingBottom="30px"
      >
        <div>
          <HStack>
            <Image src={logo} boxSize="50px" marginLeft={"50px"} />
            <Heading ml={"10px"} textShadow="1px 1px #1A365D">
              eBOOK
            </Heading>
          </HStack>
        </div>
        <ColorModeSwitch />
      </HStack>
    </Card>
  );
};

export default NavBar;
