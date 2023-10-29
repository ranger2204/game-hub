import { ListItem, Image, HStack, List, Heading, Text, Spinner, Button } from '@chakra-ui/react';
import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props {
    selectedGenre: Genre | null
    onSelectGenre: (genre: Genre) => void;
}


const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {

    const { data, error, isLoading } = useGenres();
    if (isLoading) return <Spinner></Spinner>;
    if (error) return null;
    return (
        <List>
            {
                data.map((genre) =>
                    <ListItem key={genre.name} paddingY={2}>
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize='25px' borderRadius={8}></Image>
                            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                )}

        </List>
    )
}

export default GenreList