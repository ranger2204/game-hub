import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Game, Platform } from './hooks/useGames'
import { Genre } from './hooks/useGenres'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
}



function App() {

  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav">
      <NavBar />
    </GridItem>
    <Show above="lg">
      <GridItem area="aside" paddingX={4}>
        <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
      </GridItem>
    </Show>
    <GridItem area="main">
      <PlatformSelector onSelectPlaform={(platform) => setGameQuery({ ...gameQuery, platform })} />
      <GameGrid gameQuery={gameQuery} />
    </GridItem>

  </Grid>
}


export default App
