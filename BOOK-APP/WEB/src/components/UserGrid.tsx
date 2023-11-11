import { Text , SimpleGrid} from '@chakra-ui/react';
import useUsers from '../hooks/useUsers';
import { UserBadge } from './UserBadge';



export const UserGrid = () => {
  
    const {users, error} = useUsers();
  
    return (
        <>
           {error && <Text>{error}</Text>}
            <SimpleGrid columns={1} spacingX='40px' spacingY='20px' marginTop={10} padding={10} spacing={10}>
                {users.map(user => <UserBadge key={user.id} user={user}/>)}
            </SimpleGrid>
        </>
    );
};