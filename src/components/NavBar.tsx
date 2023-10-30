import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


interface Props {
    onSearch: (value: string) => void
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={(keyword) => onSearch(keyword)} />
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar