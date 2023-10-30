import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
    onSelectSort: (sortBy: string) => void;
}


const SortSelector = ({ onSelectSort }: Props) => {
    const [sortBy, setSortBy] = useState('')

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-release', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Rating' },
    ]
    return <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order By : {sortBy}</MenuButton>
        <MenuList>
            {
                sortOrders.map((order) =>
                    <MenuItem onClick={() => { onSelectSort(order.value); setSortBy(order.label) }}
                        key={order.value} value={order.value}>{order.label}</MenuItem>
                )
            }
        </MenuList>
    </Menu>;

}

export default SortSelector