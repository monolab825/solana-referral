import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import CreditsTable from './CreditsTable';

const Credits = () => {
    return (
        <Box>

            <Box maxW='652px' w='100%' border='1px solid #8AABED' p={{ base: '15px', md: '30px' }} mb='40px' boxShadow='0px 5px 0px #215ED7' position='relative' textTransform='uppercase' display='flex' alignItems='center' justifyContent='space-between'>
                <Box>
                    <Text fontSize={{ base: '20px', md: '24px' }}>My Credits</Text>
                    <Text fontSize={{ base: '34px', md: '44px' }}>50000</Text>
                </Box>
                <Button fontSize='20px' fontWeight='normal' color='white' bg='#215ED7' border='2px solid white' borderRadius='50px' mr={{ base: '0px', md: '30px' }} p={{ base: '10px 18px', md: '14px 23px' }} _hover={{ color: 'black', bg: 'white', border: '2px solid #215ED7' }} >
                    Redeem
                </Button>
            </Box>

            <Box w='100%' border='1px solid #8AABED' p={{ base: '15px', md: '30px' }} mb='40px' >
                <Flex alignItems='center' gap='12px' mb='20px'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                    <Text fontSize='24px'>
                        Credit History
                    </Text>
                </Flex>
                <Box
                    overflowX="auto"
                    maxW={{ base: 'auto' }}
                >
                    <CreditsTable />
                </Box>
            </Box>

            <Box w='100%' border='1px solid #8AABED' p={{ base: '15px', md: '30px' }} >
                <Text fontSize='24px' mt='0' mb='20px'>
                    What are credits
                </Text>
                <Text fontSize='16px'>
                    Credits are earned based on commissions and time of joining, and can be used for future token airdrops. The number of credits earned depends on the commission earned & package/s bought and the phase of the business. Example: Someone purchase a Mercury Package (10m pepe 1) the user who bought it will get the same amount in CREDITS If the user sponsor someone, and make 10M pepe TOTAL COMMISSIONS, then he will get instantly in his wallet 8M PEPE, and the remaining 20% will be sent automatically in the same transaction to the LP wallet, and the user will get 20% Credits uploaded. FYI: The more you active in the network, more commission you will get, and more credits you will collect
                </Text>
            </Box>
        </Box >
    );
};

export default Credits;