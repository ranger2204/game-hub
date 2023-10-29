import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
    onSelectPlaform: (selectedPlaform: Platform) => void
}

const PlatformSelector = ({ onSelectPlaform }: Props) => {
    const { data, error, isLoading } = usePlatforms()
    const [selectedPlatform, setPlatform] = useState<Platform | null>(null)

    if (error) return null;
    if (isLoading) return <Spinner></Spinner>
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {
                    data.map(platform => <MenuItem key={platform.id} onClick={() => {
                        setPlatform(platform); onSelectPlaform(platform)
                    }}>{platform.name}</MenuItem>)
                }
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector