import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode
}

const GameCardContainer = ({ children }: Props) => {
    return (
        <Box width={'300px'} height={'350px'} borderRadius='5px' overflow={"hidden"}>
            {children}
        </Box>
    )
}

export default GameCardContainer