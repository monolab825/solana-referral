import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Packages = () => {
    const packageCards = [
        { packageName: 'BRONZE Plan', packageImage: 'https://i.ibb.co/db0w3zQ/Mask-group.png' },
        { packageName: 'GOLD Plan ', packageImage: 'https://i.ibb.co/db0w3zQ/Mask-group.png' },
        { packageName: 'EMERALD Plan ', packageImage: 'https://i.ibb.co/db0w3zQ/Mask-group.png' },
        { packageName: 'DIAMOND Plan ', packageImage: 'https://i.ibb.co/db0w3zQ/Mask-group.png' },
        { packageName: 'BLUE DIAMOND Plan', packageImage: 'https://i.ibb.co/db0w3zQ/Mask-group.png' },
        { packageName: 'BLACK DIAMOND Plan', packageImage: 'https://i.ibb.co/db0w3zQ/Mask-group.png' }
    ]
    return (
        <Box>
            <Box maxW='652px' w='100%' border='1px solid #8AABED' mb='20px' p='20px' boxShadow='0px 5px 0px #215ED7'>
                <Image w='100%' maxH='250px' src='https://i.ibb.co/9HM56Zb/Rectangle-66.png' />
                <Flex gap='30%' mt='30px'>
                    <Box>
                        <Text fontSize='20px'>Current Plan</Text>
                        <Text fontSize='32px'>SILVER</Text>
                    </Box>
                    <Box>
                        <Text fontSize='20px'>Price</Text>
                        <Text fontSize='32px'>2 SOL</Text>
                    </Box>
                </Flex>
            </Box>
            <Text fontSize='32px' mt='25px' mb='8px'>
                Packages
            </Text>
            <Box display='flex' flexWrap='wrap' gap='30px'>
                {packageCards.map((card) =>
                    <Box maxW='426px' w='100%' mx='auto' border='1px solid #8AABED' mb='20px' px='20px' py='15px' boxShadow='0px 5px 0px #215ED7'>
                        <Image w='100%' maxH='250px' src={card.packageImage} />
                        <Text fontSize='32px'>{card.packageName}</Text>
                        <Flex gap='16px' justifyContent='end' mt='30px'>
                            <Button variant='outline' borderColor='black' fontSize='16px' fontWeight='normal' borderRadius="30px">
                                Details
                            </Button>
                            <Button border='none' color='white' bg='#05A41F' fontSize='16px' fontWeight='normal' borderRadius="30px">
                                Upgrade
                            </Button>
                        </Flex>
                    </Box>)}
            </Box>

            <Text fontSize='32px'>
                Packages details
            </Text>
            <Box p='15px' bg='#f5f5f5'>
                <Image w='100%' maxH='366px' src='https://i.ibb.co/9HM56Zb/Rectangle-66.png' />
            </Box>
            <Text fontSize='32px' mt='50px' mb='20px'>EMERALD plan</Text>
            <Text fontSize='16px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text fontSize='16px' mt='30px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text fontSize='32px' mt='30px' mb='20px'>Price: 10 SOL</Text>
            <Text fontSize='16px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </Box>
    );
};

export default Packages;