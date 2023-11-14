import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"
import axios from "axios";


type  Book = {
  title: string,
  author: string,
  note:string,
  image: string
};

const PostBook = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const [book ,setBook] = useState<Book>({
      title: "",
      author: "",
      note:"",
      image: ""
      
    });

    const setNewValue = (id_: string, newValue: string) =>
    setBook(prevState => ({...prevState, [id_]: newValue}))

    const handle = async() => {
      try {
         const response = await axios.post('http://localhost:3000/api/books', book)
         console.log(response.data)
      }
      catch (exception){
        alert('there was an error')
      }
    };

    return (
      <>
        <Button  boxShadow='md' rounded='xl' variant='ghost' onClick={onOpen}>
          Add-BOOK
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent  w={'4000px'}>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Add a new Book
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='25px'>
                  <Box>
                    <FormLabel htmlFor='BookName'>Book Name</FormLabel>
                    <Input onChange={evt => {setNewValue("title",evt.target.value)}} placeholder='Please enter the Book Name'/>
                  </Box>
                  <Box>
                    <FormLabel htmlFor='username'>Author Name</FormLabel>
                    <Input onChange={evt => {setNewValue("author",evt.target.value)}} placeholder='Please enter the Author Name' />
                  </Box>
                  <Box>
                    <FormLabel htmlFor='Image'>Image Url</FormLabel>
                    <InputGroup>
                      <InputLeftAddon>http://</InputLeftAddon>
                      <Input type='url' onChange={evt => {setNewValue("image",evt.target.value)}} placeholder='Please enter Image of the Book' />
                  </InputGroup>
                  </Box>
                  <Box>
                    <FormLabel htmlFor='Note'>Note</FormLabel>
                    <Textarea onChange={evt => {setNewValue("note",evt.target.value)}} id='note' />
                  </Box>
                </Stack>
              </DrawerBody>
  
              <DrawerFooter borderTopWidth='1px'>
                <Button w={'100px'} boxShadow='md' rounded='xl' variant='ghost' onClick={onClose}>Cancel</Button>
                <Button w={'100px'} boxShadow='md' rounded='xl' variant='ghost' onClick={() => {handle()}} >ADD</Button>
              </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default PostBook