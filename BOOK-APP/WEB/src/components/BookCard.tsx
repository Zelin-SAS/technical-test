import React, { useReducer, useState } from "react";
import {
  Card,
  Image,
  CardBody,
  Heading,
  Text,
  CardFooter,
  HStack,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Book } from "../hooks/useBooks";
import useData from "../hooks/useData";
import axios from "axios";
import { User } from "../hooks/useUsers";

interface Props {
  book: Book;
  books: any;
  setBooks: any;
}

export const BookCard = ({ books, setBooks, book }: Props) => {
  const originalBooks = [...books];

  const { isOpen, onOpen, onClose } = useDisclosure();

  const setNewValue = (id_: string, newValue: string) => {
    setBooks((prevState: any[]) => {
      const newState = prevState.map((obj) => {
        if (obj._id == book._id) {
          return { ...obj, [id_]: newValue };
        }
        return obj;
      });
      return newState;
    });
  };

  const handle = (book: Book) => {
    setBooks(books.map((u: Book) => (u._id === book._id ? book : u)));
    try {
      const response = axios.put(
        `http://localhost:3000/api/books/${book._id}`,
        book
      );
      onClose();
    } catch (exception) {
      alert("there was an error");
      setBooks(originalBooks);
    }
  };

  const deletBook = (book: Book) => {
    const originalBooks = [...books];
    setBooks(books.filter((u: Book) => u._id !== book._id));
    axios
      .delete(`http://localhost:3000/api/books/${book._id}`)
      .then((response) => {
        console.log(`Deleted post with ID ${book._id}`);
      })
      .catch((error) => {
        console.error(error);
        setBooks(originalBooks);
      });
  };

  return (
    <>
      <Card
        boxShadow={"dark-lg"}
        direction={{ base: "column", sm: "row" }}
        variant="outline"
        borderRadius={35}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={book.image}
          padding={"10px"}
          borderRadius={30}
        ></Image>
        <HStack overflow={"auto"}>
          <Stack>
            <CardBody>
              <Heading fontSize={"2xl"}>{book.title}</Heading>
              <Heading py={1} fontSize={"sm"}>
                by: <u>{book.author}</u>
              </Heading>
              <CardBody>
                <Text py={1}>Overview : {book.note}</Text>
              </CardBody>
              <HStack justifyContent={"space-between"}>
                <Button
                  boxShadow="md"
                  rounded="xl"
                  variant="ghost"
                  onClick={onOpen}
                >
                  UPDATE
                </Button>
                <>
                  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent w={"4000px"}>
                      <DrawerCloseButton />
                      <DrawerHeader borderBottomWidth="1px">
                        Update your Book
                      </DrawerHeader>

                      <DrawerBody>
                        <Stack spacing="25px">
                          <Box>
                            <FormLabel htmlFor="BookName">Book Name</FormLabel>
                            <Input
                              type="text"
                              defaultValue={book.title}
                              onChange={(evt) => {
                                setNewValue("title", evt.target.value);
                              }}
                            />
                          </Box>
                          <Box>
                            <FormLabel htmlFor="username">
                              Author Name
                            </FormLabel>
                            <Input
                              defaultValue={book.author}
                              onChange={(evt) => {
                                setNewValue("author", evt.target.value);
                              }}
                            />
                          </Box>
                          <Box>
                            <FormLabel htmlFor="Image">Image Url</FormLabel>
                            <InputGroup>
                              <InputLeftAddon>http://</InputLeftAddon>
                              <Input
                                type="url"
                                defaultValue={book.image}
                                onChange={(evt) => {
                                  setNewValue("image", evt.target.value);
                                }}
                              />
                            </InputGroup>
                          </Box>
                          <Box>
                            <FormLabel htmlFor="Note">Note</FormLabel>
                            <Textarea
                              defaultValue={book.note}
                              onChange={(evt) => {
                                setNewValue("note", evt.target.value);
                              }}
                            />
                          </Box>
                        </Stack>
                      </DrawerBody>

                      <DrawerFooter borderTopWidth="1px">
                        <Button
                          w={"100px"}
                          boxShadow="md"
                          rounded="xl"
                          variant="ghost"
                          onClick={onClose}
                        >
                          Cancel
                        </Button>
                        <Button
                          w={"100px"}
                          boxShadow="md"
                          rounded="xl"
                          variant="ghost"
                          onClick={() => handle(book)}
                        >
                          Update
                        </Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </>

                <Button
                  boxShadow="md"
                  rounded="xl"
                  variant="ghost"
                  onClick={() => deletBook(book)}
                >
                  DELETE
                </Button>
              </HStack>
            </CardBody>
          </Stack>
        </HStack>
      </Card>
    </>
  );
};
