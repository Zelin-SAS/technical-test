import { Text , SimpleGrid, Skeleton} from '@chakra-ui/react';
import useUsers from '../hooks/useUsers';
import { UserBadge } from './UserBadge';
import { UserBadgeSkeleton } from './UserBadgeSkeleten';



export const UserGrid = () => {
  
    const {users, error, isLoading} = useUsers();
    const skeletons = [1, 2, 3, 4, 5, 6];
  
    return (
        <>
            {error && <Text>{error}</Text>}
            {isLoading  && skeletons.map(skeleton=> <UserBadgeSkeleton key={skeleton}/>)}
            <SimpleGrid columns={1} spacingX='10px' spacingY='20px' padding={10} spacing={10}>
                {users.map(user => <UserBadge key={user.id} user={user}/>)}
            </SimpleGrid>
        </>
    );
};