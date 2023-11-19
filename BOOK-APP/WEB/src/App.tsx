import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { BookGrid } from "./components/BookGrid";
import { UserGrid } from "./components/UserGrid";
import { User } from "./hooks/useUsers";
import { useState } from "react";
import BookNavbar from "./components/BookNavbar";
import useBooks, { Book } from "./hooks/useBooks";
import useData from "./hooks/useData";

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"70% 1fr 30px"}
      gridTemplateColumns={"23% 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <UserGrid setSelectedUser={setSelectedUser} />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <BookGrid selectedUser={selectedUser} />
      </GridItem>
    </Grid>
  );
}

export default App;
