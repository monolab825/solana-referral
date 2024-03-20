'use client'
import React, { useState } from 'react';
import HomeSidebar from './HomeSidebar';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';

const HomeIndex = () => {
    const [selectedItem, setSelectedItem] = useState('Home')
    return (
        <Box
            display='flex'
        // maxW='1724px'
        // mx='auto'
        >
            <HomeSidebar {...{ selectedItem, setSelectedItem }} />
            <Box bg='#171721' w='100%' pl='20px' >
                <Flex h='90px' borderBottom='1px solid #6fc154' alignItems='center' justifyContent='space-between' pr='40px'>
                    <Text color='white' fontSize='18px'>
                        <u>Home</u> /  {selectedItem === 'Home' ? '' : selectedItem}
                    </Text>
                    <Flex alignItems='center' gap='24px'>
                        <Button
                            px='20px'
                            color='white'
                            fontSize='16px'
                            bg='#3B8700'
                            borderRadius='40px'
                            _hover={{ color: 'white' }}
                        >
                            Connect Wallet
                        </Button>
                        <Image
                            w='30px'
                            h='30px'
                            display='inline'
                            src='https://i.ibb.co/p0pgjbS/notification-bing.png'
                            alt='navbar-notification-icon'
                        />
                        <Image
                            w='30px'
                            h='30px'
                            display='inline'
                            src='https://i.ibb.co/7JrF0YF/sms-notification.png'
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
        </Box >
    );
};

export default HomeIndex;