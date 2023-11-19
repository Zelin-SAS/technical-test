import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

const NavBar = () => {
  return (
    <Card padding={"10px"} borderTopRadius={"10px"} boxShadow="inner">
      <HStack justifyContent={"space-between"}>
        <div>
          <HStack ml={"10px"}>
            <Image src={logo} boxSize="35px" ml={"1px"} />
            <Heading ml={"10px"} size={"sm"} textShadow="1px 1px #1A365D">
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
