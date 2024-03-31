'use client'
import React from 'react';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    return (
        <Box bg='white' w='100%' display='flex' boxShadow="0 9px 10px -5px rgba(0, 0, 0, 0.2)">
            <Box h='96px' w='100%' maxW='332px' pt='18px' >
                <Box w='53px' h='53px' ml='40px' mb='18px' borderRadius='40px' bg='#DEDEDE'></Box>
            </Box>
            <Flex h='96px' w='100%' alignItems='center' justifyContent='space-between' px='40px'>
                <Text fontSize='18px' >
                    <u>USER  {pathname === '/' ? '/ Home' : pathname}</u>
                </Text>
                <Flex alignItems='center' gap='24px'>
                    <Button
                        px='20px'
                        color='white'
                        fontSize='16px'
                        bg='#215ED7'
                        borderRadius='40px'
                        fontWeight='normal'
                        _hover={{ color: 'white' }}
                    >
                        CONNECT WALLET
                    </Button>
                    <Image
                        w='30px'
                        h='30px'
                        display='inline'
                        src='https://i.ibb.co/kqQ7FSG/notification-bing.png'
                        alt='navbar-notification-icon'
                    />
                    <Image
                        w='30px'
                        h='30px'
                        display='inline'
                        src='https://i.ibb.co/ykGF8mq/sms-notification.png'
                        alt='navbar-notification-icon'
                    />
                    <Image
                        w='42px'
                        h='42px'
                        display='inline'
                        src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        alt='navbar-notification-icon'
                    />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Navbar;