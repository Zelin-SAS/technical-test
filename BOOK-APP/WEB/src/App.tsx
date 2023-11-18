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

    // <Grid
    //   templateAreas={`"nav nav"
    //               "aside main"
    //               `}
    //   gridTemplateRows={"50px 1fr 30px"}
    //   gridTemplateColumns={"150px 1fr"}
    //   h="200px"
    //   gap="1"
    //   color="blackAlpha.700"
    //   fontWeight="bold"
    // >
    //   <GridItem pl="2" bg="orange.300" area={"nav"}>
    //     <NavBar />
    //   </GridItem>
    //   <GridItem pl="2" bg="green.300" area={"main"} padding={"10px"}>
    //     <BookGrid selectedUser={selectedUser} />
    //   </GridItem>
    //   <Show above="lg">
    //     <GridItem pl="2" bg="pink.300" area={"aside"}>
    //       <UserGrid setSelectedUser={setSelectedUser} />
    //     </GridItem>
    //   </Show>
    // </Grid>
  );
}

export default App;
