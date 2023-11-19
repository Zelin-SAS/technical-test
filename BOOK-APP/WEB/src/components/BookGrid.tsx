import {
  Text,
  SimpleGrid,
  Skeleton,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import useBooks, { Book } from "../hooks/useBooks";
import { BookCard } from "./BookCard";
import { BookCardSkeleton } from "./BookCardSkeleton";
import useUsers, { User } from "../hooks/useUsers";
import BookNavbar from "./BookNavbar";
import React, { useEffect, useState } from "react";

interface Props {
  selectedUser: User | null;
}

export const BookGrid = (props: any) => {
  if (props.selectedUser == null) {
    return (
      <Text ml={"30px"} as="b" fontSize="xl">
        Please choose your user!
      </Text>
    );
  }
  const { data, setData, error, isLoading } = useBooks(props.selectedUser);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return data.length == 0 ? (
    <Text ml={"30px"} as="b" fontSize="xl">
      This user doesn't have any book !
    </Text>
  ) : (
    <Card w={"100%"} height={"100%"}>
      <CardBody w={"100%"}>
        <BookNavbar />
        <Card padding={"15px"} mt={"10px"}>
          <Heading
            mb={"20px"}
            mt={"10px"}
            size="lg"
            textShadow="1px 1px #1A365D"
          >
            BOOKS
          </Heading>
          {error && <Text>{error}</Text>}
          <SimpleGrid
            columns={{ sm: 1, xl: 2 }}
            spacingX="20px"
            spacingY="20px"
          >
            {isLoading && skeletons.map((skeleton) => <BookCardSkeleton />)}
            {data.map((book) => (
              <BookCard books={data} setBooks={setData} book={book} />
            ))}
          </SimpleGrid>
        </Card>
      </CardBody>
    </Card>
  );
};
