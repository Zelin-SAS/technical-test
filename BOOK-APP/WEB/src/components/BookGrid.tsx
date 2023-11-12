
import { Text , SimpleGrid} from '@chakra-ui/react';
import useBooks from '../hooks/useBooks';
import { BookCard } from './BookCard';
import { BookCardSkeleton } from './BookCardSkeleton';


export const BookGrid = () => {
  
    const {books, error, isLoading} = useBooks();
    const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={1} spacingX='40px' spacingY='20px' padding={10} spacing={10}>
                {isLoading && skeletons.map(skeleton => <BookCardSkeleton key={skeleton}/>)}
                {books.map(book => <BookCard key={book.id} book={book}/>)}
            </SimpleGrid>
        </>
    )
}
