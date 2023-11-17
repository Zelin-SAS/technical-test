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
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" padding={"10px"}>
        <BookGrid selectedUser={selectedUser} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <UserGrid
            selectedUser={selectedUser}
            onSelectUser={(user) => setSelectedUser(user)}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
