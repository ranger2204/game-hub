import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'


const SortSelector = () => {

    return <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By</MenuButton>
        <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
        </MenuList>
    </Menu>;

}

export default SortSelector