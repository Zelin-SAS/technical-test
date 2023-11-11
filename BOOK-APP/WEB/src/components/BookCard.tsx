import React from 'react'
import { Card, Image, CardBody, Heading } from '@chakra-ui/react';
import { Book } from '../hooks/useBooks'

interface Props {
    book: Book
}

export const BookCard = ({book}: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={book.image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{book.title}</Heading>
        </CardBody>
    </Card>
  )
}