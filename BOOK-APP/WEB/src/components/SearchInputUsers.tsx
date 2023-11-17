import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export const SearchInputUsers = () => {
  return (
    <InputGroup>
      <InputLeftElement ml={"5px"} mt={"15px"} children={<BsSearch />} />
      <Input
        height={"70px"}
        borderRadius={20}
        placeholder="Search User..."
        variant="filled"
      />
    </InputGroup>
  );
};
