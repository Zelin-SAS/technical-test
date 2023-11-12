import { Avatar, SimpleGrid, Box, Button, Flex, HStack, Text } from "@chakra-ui/react"
import useUsers, { User } from '../hooks/useUsers';
import { UserBadgeSkeleton } from './UserBadgeSkeleten';

interface Props {
    onSelectUser: (user: User) => void;
}

export const UserGrid = ({onSelectUser}:Props) => {
  
    const {data, error, isLoading} = useUsers();
    const skeletons = [1, 2, 3, 4, 5, 6];
  
    return (
        <>
            {error && <Text>{error}</Text>}
            {isLoading  && skeletons.map(Skeleton => <UserBadgeSkeleton key={Skeleton}/>)}
            <SimpleGrid  columns={1} spacingX='100px' spacingY='20px' padding={10} spacing={10}>
                {data.map((user: User) => (
                <Flex width={'100%'} boxShadow={'dark-lg'} as='button' ml='10' overflow={"hidden"} borderRadius={15} onClick={()=>onSelectUser(user)}>
                <Box  width={'100%'} padding='7'>
                  <HStack  padding={1} borderRadius={10}>
                  <Avatar src='https://c1.klipartz.com/pngpicture/245/560/sticker-png-person-icon-avatar-icon-design-user-profile-face-silhouette-head-line-art.png'/>
                 
                  <HStack width={'100%'} justifyContent={"space-between"}  padding='10px' borderRadius={10}>
                    <Text fontWeight='bold'>{user.name}</Text>
                    <Button>ADD-BOOK</Button>
                  </HStack>
                  
                  </HStack>
                  </Box>
            </Flex>
            ))}
            </SimpleGrid>
        </>
    );
};