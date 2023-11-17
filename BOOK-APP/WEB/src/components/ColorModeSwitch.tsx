import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        mt={"5px"}
        mr={"5px"}
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize={"25px"} mr={"31px"}>
        Dark Mode
      </Text>
    </HStack>
  );
};
