import { HStack, Icon, Text } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons';


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        xbox: FaXbox,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        mac: FaApple
    }

    return (
        <HStack marginY={'10px'}>
            {platforms.map(
                (platform) => <Icon title={platform.name} key={platform.name} as={iconMap[platform.name.toLowerCase()]} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconList