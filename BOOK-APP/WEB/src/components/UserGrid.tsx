import { Avatar, SimpleGrid, Box, Button, Flex, HStack, Text, Card, CardBody, CardHeader, Heading} from "@chakra-ui/react"
import useUsers, { User } from '../hooks/useUsers';
import { UserBadgeSkeleton } from './UserBadgeSkeleten';
import UserNavBar from "./UserNavBar";
import PostBook from "./PostBook";

interface Props {
    onSelectUser: (user: User) => void;
    selectedUser: User | null;
}

export const UserGrid = ({selectedUser, onSelectUser}:Props) => {
  
    const {data, error, isLoading} = useUsers();
    const skeletons = [1, 2, 3, 4, 5, 6];
  
    return (
        <>
            {error && <Text>{error}</Text>}
            {isLoading  && skeletons.map(Skeleton => <UserBadgeSkeleton key={Skeleton}/>)}  
            
            
            <Card mt={'10px'} padding={'50px'} ml={'40px'}>
                    <CardBody>
                        <UserNavBar/>
                        <Card padding={'15px'} mt={'10px'} boxShadow='inner'>
                        <Heading ml={'5'} mb={'20px'} mt={'10px'}  textShadow='1px 1px #1A365D'>USERS</Heading>
                            {data.map((user: User) => (
                    <Card borderRadius={'30px'} mb='20px' padding={'10px'} boxShadow={'dark-lg'}> 
                                <Box mb={'20px'} height={'70px'} as="button" onClick={()=>console.log(user._id)} fontWeight={user.book === selectedUser?.book ? 'bold' : 'normal'}>
                                    <HStack  padding={'20px'} borderRadius={30}>
                                        <Avatar src='https://c1.klipartz.com/pngpicture/245/560/sticker-png-person-icon-avatar-icon-design-user-profile-face-silhouette-head-line-art.png'/>
                                        <HStack width={'100%'} justifyContent={"space-between"}  padding='1px'>
                                            <Text fontWeight='bold'>{user.name}</Text>
                                            <PostBook/>
                                        </HStack>
                                    </HStack>
                                </Box>
                    </Card>
                ))}
                       </Card>
                    </CardBody>
            </Card>
        </>
    );
};