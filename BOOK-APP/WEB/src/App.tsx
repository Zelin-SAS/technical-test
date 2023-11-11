import { Grid, GridItem,Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"



function App() {
  return (<Grid templateAreas={{
    base: `"nav" " aside"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <GridItem area="aside" bg="blue">aside</GridItem>
    <Show above="lg">
      <GridItem area="main" bg="green">main</GridItem>
    </Show>
      
  </Grid>
  );
}

export default App