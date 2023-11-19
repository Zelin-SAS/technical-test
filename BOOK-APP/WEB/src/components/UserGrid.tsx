import {
  Avatar,
  SimpleGrid,
  Box,
  Button,
  Flex,
  HStack,
  Text,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import useUsers, { User } from "../hooks/useUsers";
import { UserBadgeSkeleton } from "./UserBadgeSkeleten";
import UserNavBar from "./UserNavBar";
import PostBook from "./PostBook";

interface Props {
  onSelectUser: (user: User) => void;
  selectedUser: User | null;
}

export const UserGrid = (props: { setSelectedUser: (arg0: User) => any }) => {
  const { data, error, isLoading } = useUsers();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Card padding={"10px"}>
        <UserNavBar />
        <Card padding={"20px"} mt={"10px"}>
          <Heading
            size={"ms"}
            mb={"10px"}
            mt={"10px"}
            textShadow="1px 1px #1A365D"
          >
            USERS
          </Heading>
          {isLoading}
          {data.map((user: User) => (
            <Box
              boxShadow={"dark-lg"}
              width={"100%"}
              mb={"20px"}
              as="button"
              borderRadius={"20px"}
              padding={"10px"}
              onClick={() => {
                props.setSelectedUser(user);
              }}
            >
              <HStack>
                <Avatar src="https://c1.klipartz.com/pngpicture/245/560/sticker-png-person-icon-avatar-icon-design-user-profile-face-silhouette-head-line-art.png" />
                <HStack
                  width={"100%"}
                  justifyContent={"space-between"}
                  padding="1px"
                >
                  <Text fontSize={"10px"} fontWeight="bold">
                    {user.name}
                  </Text>
                  <div>
                    <PostBook user={user} />
                  </div>
                </HStack>
              </HStack>
            </Box>
          ))}
        </Card>
      </Card>
    </>
  );
};
