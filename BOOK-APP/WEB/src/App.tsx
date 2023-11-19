import {
  Box,
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
    <Grid templateAreas={`"header header" " nav main"`}>
      <GridItem mt={"20px"} p={2} area={"header"}>
        <NavBar />
      </GridItem>
      <Box display={{ lg: "flex" }}>
        <Box>
          <GridItem p={2} area={"nav"}>
            <UserGrid setSelectedUser={setSelectedUser} />
          </GridItem>
        </Box>
        <Box>
          <GridItem p={2} area={"main"}>
            <BookGrid selectedUser={selectedUser} />
          </GridItem>
        </Box>
      </Box>
    </Grid>
  );
}

export default App;
