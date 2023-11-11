import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text , SimpleGrid} from '@chakra-ui/react';
import { CanceledError } from 'axios';
import useBooks from '../hooks/useBooks';
import { BookCard } from './BookCard';


export const BookGrid = () => {
  
    const {books, error} = useBooks();
  
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid column={{sm: 1, md: 2, lg:3 , xl: 5}} padding={10} spacing={10}>
                {books.map(book => <BookCard key={book.id} book={book}/>)}
            </SimpleGrid>
        </>
    )
}
