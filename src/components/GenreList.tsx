import { ListItem, Image, HStack, List, Heading, Text } from '@chakra-ui/react';
import React from 'react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {

    const { data, error, isLoading } = useGenres();

    return (
        <List>
            {
                data.map((genre) =>
                    <ListItem key={genre.name} paddingY={2}>
                        <HStack>
                            <Image src={getCroppedImageUrl(genre.image_background)} boxSize='25px' borderRadius={8}></Image>
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                )}

        </List>
    )
}

export default GenreList