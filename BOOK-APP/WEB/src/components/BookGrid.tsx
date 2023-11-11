import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react';
import { CanceledError } from 'axios';
import useBooks from '../hooks/useBooks';


export const BookGrid = () => {
  
    const {books, error} = useBooks();
  
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {books.map(book => <li key={book.id}>{book.title}</li>)}
            </ul>
        </>
    )
}
