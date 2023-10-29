import { SimpleGrid, Text } from '@chakra-ui/react'
import { GameQuery } from '../App';
import useGames, { Platform } from '../hooks/useGames'
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import PlatformSelector from './PlatformSelector';

interface Props {
    gameQuery: GameQuery;
}


const GameGrid = ({ gameQuery }: Props) => {

    const { data, error, isLoading } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>
            {error && <Text color={'red'}>{error}</Text>}

            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding={10}>
                {isLoading && skeletons.map((skeleton) => <GameCardContainer>
                    <GameCardSkeleton key={skeleton}></GameCardSkeleton>
                </GameCardContainer>)}
                {
                    !isLoading && data.map((game) => (
                        < GameCardContainer >
                            <GameCard key={game.id} game={game}></GameCard>
                        </GameCardContainer>
                    ))

                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid;