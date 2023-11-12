import { Grid, GridItem,Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import { BookGrid } from "./components/BookGrid";
import { UserGrid } from "./components/UserGrid";
import { User } from "./hooks/useUsers";
import { useState } from "react";



function App() {
  const [selectedUser, setSelectedUser] = useState <User | null>(null);
  
  
  return (<Grid templateAreas={{
    base: `"nav" " aside"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem> 
    <GridItem area="aside"><UserGrid/></GridItem>
    <Show above="lg">
      <GridItem area="main"><BookGrid/></GridItem>
    </Show>
      
  </Grid>
  );
}

export default App