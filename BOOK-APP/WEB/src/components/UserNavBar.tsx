import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { SearchInputUsers } from "./SearchInputUsers";

const UserNavBar = () => {
  return (
    <HStack
      mt={"10px"}
      borderTopRadius={"30px"}
      boxShadow={"dark-lg"}
      padding="10px"
    >
      <SearchInputUsers />
    </HStack>
  );
};

export default UserNavBar;
