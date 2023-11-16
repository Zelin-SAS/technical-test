import { Text , SimpleGrid, Skeleton, Button, Card, CardBody, CardHeader, Heading} from '@chakra-ui/react';
import useBooks, { Book } from '../hooks/useBooks';
import { BookCard } from './BookCard';
import { BookCardSkeleton } from './BookCardSkeleton';
import { User } from '../hooks/useUsers';
import BookNavbar from './BookNavbar';
import React, { useState } from 'react';

interface Props {
    selectedUser: User | null ;
}

export const BookGrid = ({selectedUser}: Props) => {
    const {data, error, isLoading} = useBooks();
    const skeletons = [1, 2, 3, 4, 5, 6];



    return (

        <Card>
              <CardBody>
                  <CardHeader  marginLeft={'30px'} mr={'30px'}>
                        <BookNavbar/>
                  </CardHeader>
                      <Card  boxShadow='inner' ml={'50px'} mr={'50px'}>
                          <CardHeader marginLeft={'50px'}>
                            <Heading mt={'5px'} size='xl' textShadow='1px 1px #1A365D'>BOOKS</Heading>
                          </CardHeader> 
                          <CardBody>
                              {error && <Text>{error}</Text>}
                                <SimpleGrid columns={2} spacingX='20px' spacingY='20px'>
                                    {isLoading && skeletons.map(skeleton => <BookCardSkeleton/>)}
                                    {data.map(book => <BookCard key={book._id} book={book}/>)}
                                </SimpleGrid>
                          </CardBody>
                      </Card>
                </CardBody>
              </Card>
    )

}
