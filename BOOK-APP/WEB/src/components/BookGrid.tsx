
import { Text , SimpleGrid, Skeleton} from '@chakra-ui/react';
import useBooks from '../hooks/useBooks';
import { BookCard } from './BookCard';
import { BookCardSkeleton } from './BookCardSkeleton';
import { User } from '../hooks/useUsers';

interface Props {
    selectedUser: User | null ;
}
 
export const BookGrid = ({selectedUser}: Props) => {
  
    const {data, error, isLoading} = useBooks(selectedUser);
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={1} spacingX='40px' spacingY='20px' padding={10} spacing={10}>
                {isLoading && skeletons.map(skeleton => <BookCardSkeleton/>)}
                {data.map(book => <BookCard key={book.id} book={book}/>)}
            </SimpleGrid>
        </>
    )
}
