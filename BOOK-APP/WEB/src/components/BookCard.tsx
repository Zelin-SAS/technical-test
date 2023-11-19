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
  ButtonGroup,
  Flex,
  Spacer,
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
      <Box
        borderRadius={"30px"}
        boxShadow={"dark-lg"}
        p={4}
        display={{ md: "flex" }}
      >
        <Box flexShrink={0}>
          <Image objectFit="cover" width={{ md: 40 }} src={book.image}></Image>
        </Box>
        <Box>
          <Stack>
            <CardBody>
              <Heading fontSize={"15"}>{book.title}</Heading>
              <Text py={1} fontSize={"15px"}>
                by: <u>{book.author}</u>
              </Text>
              <CardBody>
                <Text py={1} fontSize={"15px"}>
                  Overview : {book.note}
                </Text>
              </CardBody>
              <Flex>
                <Button
                  boxShadow="md"
                  rounded="xl"
                  variant="ghost"
                  size="sm"
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
                <Spacer />
                <Button
                  boxShadow="md"
                  rounded="xl"
                  variant="ghost"
                  size="sm"
                  onClick={() => deletBook(book)}
                >
                  DELETE
                </Button>
              </Flex>
            </CardBody>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
