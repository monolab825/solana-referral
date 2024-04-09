import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Packages = ({ setPathname }: any) => {
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
            <Text fontSize={{ base: '26px', sm: '32px' }} mt='25px' mb='8px'>
                Packages
            </Text>
            <Box display='flex' flexWrap='wrap' gap='30px'>
                {packageCards.map((card) =>
                    <Box maxW='406px' w='100%' mx='auto' border='1px solid #8AABED' mb='20px' px={{ base: '10px', sm: '20px' }} py='15px' boxShadow='0px 5px 0px #215ED7'>
                        <Image w='100%' maxH='250px' src={card.packageImage} />
                        <Text fontSize={{ base: '26px', sm: '32px' }}>{card.packageName}</Text>
                        <Flex gap='16px' justifyContent='end' mt='30px'>
                            <Button variant='outline' borderColor='black' fontSize='16px' fontWeight='normal' borderRadius="30px" onClick={() => setPathname('/packages-details')}>
                                Details
                            </Button>
                            <Button border='none' color='white' bg='#05A41F' fontSize='16px' fontWeight='normal' borderRadius="30px">
                                Upgrade
                            </Button>
                        </Flex>
                    </Box>)}
            </Box>
        </Box>
    );
};

export default Packages;