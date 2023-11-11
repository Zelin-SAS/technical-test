import { Grid, GridItem } from "@chakra-ui/react"



function App() {
  return (<Grid templateAreas={{
    base: `"nav nav" "aside main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav" bg="colde">nav</GridItem>
    <GridItem area="nav" bg="blue">nav</GridItem>
    <GridItem area="aside" bg="black">aside</GridItem>
    <GridItem area="main" bg="green">main</GridItem>
  </Grid>
  );
}

export default App