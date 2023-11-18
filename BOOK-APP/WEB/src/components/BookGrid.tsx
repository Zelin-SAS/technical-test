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
  const { data, error, isLoading } = useBooks(props.selectedUser);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return data.length == 0 ? (
    <Text ml={"30px"} as="b" fontSize="xl">
      This user doesn't have any book !
    </Text>
  ) : (
    <Card
      w={"100%"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody height={"100%"} w={"100%"}>
        <BookNavbar />
        <Heading
          ml={"30px"}
          mb={"20px"}
          mt={"20px"}
          size="xl"
          textShadow="1px 1px #1A365D"
        >
          BOOKS
        </Heading>
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 1, xl: 2 }}
          height="100%"
          width="100%"
          spacingX="20px"
          spacingY="20px"
        >
          {isLoading && skeletons.map((skeleton) => <BookCardSkeleton />)}
          {data.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};
