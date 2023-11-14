import React, { useReducer } from 'react'
import { Card, Image, CardBody, Heading, Text, CardFooter , HStack,  Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure} from '@chakra-ui/react';
import { Book } from '../hooks/useBooks'
import useData from '../hooks/useData';
import axios from 'axios';


interface Props {
    book: Book

}

export const BookCard = ({book}: Props) => {
    const { data , setData} = useData<Book>('http://localhost:3000/api/books');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    const setNewValue = (id_: string, newValue: string) =>
    setData(prevState => ({...prevState, [id_]: newValue}))

    const deletBook = (book: Book) => {
        axios.delete(`http://localhost:3000/api/books/${book._id}`)
            .then(response => {
                console.log(`Deleted post with ID ${book._id}`);
            })
            .catch(error => {
                console.error(error);
            }); 
        window.location.reload();
    }


    const handle = (book: Book) => {
        console.log(book._id)
  
        try {
          const response = axios.put(`http://localhost:3000/api/books/${book._id}`, data)
        }
        catch (exception){
        alert('there was an error')
        }
    window.location.reload();
    }

  return (
    <>
        <Card width='100%' boxShadow={'dark-lg'} direction={{ base: 'column', sm: 'row' }}  overflow='hidden' variant='outline' borderRadius={35}>
        <HStack padding={2}>
        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={(book.image)} padding={2} borderRadius={30}></Image>
        <Stack>
            <CardBody padding='4'>    
                <Heading fontSize={'2xl'}>{book.title}</Heading>
                <Text py={1}>
                    by <u>{book.author}</u>
                </Text>
                <Text py={9}>
                    Overview : {book.note}
                </Text>
                <HStack justifyContent={'space-between'}>
                    

                <Button  boxShadow='md' rounded='xl' variant='ghost' onClick={onOpen} >
                Update
                </Button>
                <><Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent w={'4000px'}>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Update your Book
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='25px'>
                                    <Box>
                                    <FormLabel htmlFor='BookName'>Book Name</FormLabel>
                                    <Input onChange={evt => { setNewValue("title", evt.target.value); } } placeholder='Please enter the Book Name' />
                                    </Box>
                                    <Box>
                                    <FormLabel htmlFor='username'>Author Name</FormLabel>
                                    <Input onChange={evt => { setNewValue("author", evt.target.value); } } placeholder='Please enter the Author Name' />
                                    </Box>
                                    <Box>
                                    <FormLabel htmlFor='Image'>Image Url</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon>http://</InputLeftAddon>
                                        <Input type='url' onChange={evt => { setNewValue("image", evt.target.value); } } placeholder='Please enter Image of the Book' />
                                    </InputGroup>
                                    </Box>
                                    <Box>
                                    <FormLabel htmlFor='Note'>Note</FormLabel>
                                    <Textarea onChange={evt => { setNewValue("note", evt.target.value); } } id='note' />
                                    </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button w={'100px'} boxShadow='md' rounded='xl' variant='ghost' onClick={onClose}>Cancel</Button>
                            <Button w={'100px'} boxShadow='md' rounded='xl' variant='ghost' onClick={ ()=> handle(book)}>khdem</Button>
                        </DrawerFooter>
                        </DrawerContent>
                </Drawer></>



                    <Button  boxShadow='md' rounded='xl' variant='ghost' onClick={() => deletBook(book)} >
                    DELETE
                    </Button>

                </HStack>
            </CardBody>
            
        </Stack>
        </HStack>
    </Card>
    </>
  )
}

