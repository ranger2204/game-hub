import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import { Genre } from './hooks/useGenres'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX={4}>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>
    </Show>
    <GridItem area="main">
      <GameGrid selectedGenre={selectedGenre} />
    </GridItem>

  </Grid>
}


export default App
