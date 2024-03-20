import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react'


const HomeSidebar = ({ selectedItem, setSelectedItem }: any) => {

    const menuItems = [
        {
            label: 'Home',
            iconUrl: 'https://i.ibb.co/KLdQN1N/slider-Home-Icon.png',
        },
        {
            label: 'Referrals Activity',
            iconUrl: 'https://i.ibb.co/0JCfcyh/slider-Icon-2png.png',
        },
        {
            label: 'Packages',
            iconUrl: 'https://i.ibb.co/bJD4xg1/slider-Icon-3.png',
        },
        {
            label: 'Credits',
            iconUrl: 'https://i.ibb.co/M9hWY2L/slider-Icon-4.png',
        },
    ];

    return (
        <Box
            h='100vh'
            bg='#1D1D28'
            maxW='332px'
            pt='18px'
        >
            <Box w='244px' h='53px' ml='40px' mb='18px' borderRadius='40px' bg='#37375D'></Box>

            <Box w='332px' borderTop='1px solid #326b1f' pb='30px'></Box>
            {menuItems.map((item, index) => (
                <Box
                    key={index}
                    color='white'
                    pl='45px'
                    py='15px'
                    mb='20px'
                    w='332px'
                    display='flex'
                    alignItems='center'
                    cursor='pointer'
                    fontSize={{ base: '22px', md: '23px' }}
                    _hover={{ bg: '#3b8700' }}
                    bg={selectedItem === item.label ? '#3B8700' : '#1D1D28'}
                    onClick={() => setSelectedItem(item.label)}
                    transition="background-color 0.4s ease"
                >
                    <Image
                        w='32px'
                        h='32px'
                        mr='15px'
                        display='inline'
                        src={item.iconUrl}
                        alt={`${item.label}-icon`}
                    />
                    {item.label}
                </Box>
            ))}
        </Box>
    );
};

export default HomeSidebar;