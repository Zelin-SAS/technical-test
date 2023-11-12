import React from 'react'
import { Card, Image, CardBody, Heading, Stack, Text, CardFooter ,Button, HStack} from '@chakra-ui/react';
import { Book } from '../hooks/useBooks'

interface Props {
    book: Book

}


export const BookCard = ({book}: Props) => {
  return (
    <Card width='100%' boxShadow={'dark-lg'} direction={{ base: 'column', sm: 'row' }}  overflow='hidden' variant='outline' borderRadius={15}>
       <HStack padding={2}>
        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={(book.image)} padding={2} borderRadius={25}></Image>
        <Stack>
            <CardBody padding='4'>    
                <Heading fontSize={'2xl'}>{book.title}</Heading>
                <Text py={1}>
                    by <u>{book.author}</u>
                </Text>
                <Text py={9}>
                    Overview : {book.note}
                </Text>
                <HStack>
                    <Button>
                        Update
                    </Button>
                    <Button>
                        Delete
                    </Button>
                </HStack>
            </CardBody>
            
        </Stack>
        </HStack>
    </Card>
  )
}

