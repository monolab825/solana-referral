'use client'
import React from 'react';
import { IoHome } from 'react-icons/io5';
import { LuLineChart } from 'react-icons/lu';
import { TbPackages } from 'react-icons/tb';
import { RiWallet3Fill } from 'react-icons/ri';
import { usePathname } from "next/navigation"
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Sidebar = ({ pathname, setPathname, showReferralTab }: any) => {

    return (
        <>
            <Box
                display='flex'
                alignItems='center'
                pl='40px'
                py='20px'
                bg={pathname === '/' ? '#215ED7' : 'transparent'}
                cursor='pointer'
                gap='25px'
                mb={pathname === '/' ? '7px' : '10px'}
                boxShadow={pathname === '/' ? '0px 5px 0px #09368F' : 'none'}
                color={pathname === '/' ? 'white' : 'black'}
                onClick={() => setPathname('/')}
            >
                <Text fontSize='32px'>
                    <IoHome />
                </Text>
                <Text fontSize='20px' textTransform='uppercase' fontWeight='normal'>
                    HOME
                </Text>
            </Box>
            {showReferralTab && <Box
                display='flex'
                alignItems='center'
                pl='40px'
                py='20px'
                bg={pathname === '/referral-activity' ? '#215ED7' : 'transparent'}
                cursor='pointer'
                gap='25px'
                mb={pathname === '/referral-activity' ? '7px' : '10px'}
                boxShadow={pathname === '/referral-activity' ? '0px 5px 0px #09368F' : 'none'}
                color={pathname === '/referral-activity' ? 'white' : 'black'}
                onClick={() => setPathname('/referral-activity')}
            >
                <Text fontSize='32px'>
                    <LuLineChart />
                </Text>
                <Text fontSize='20px' textTransform='uppercase' fontWeight='normal'>
                    Referrals Activity
                </Text>
            </Box>}
            <Box
                display='flex'
                alignItems='center'
                pl='40px'
                py='20px'
                bg={(pathname === '/packages' || pathname === '/packages-details') ? '#215ED7' : 'transparent'}
                cursor='pointer'
                gap='25px'
                mb={(pathname === '/packages' || pathname === '/packages-details') ? '7px' : '10px'}
                boxShadow={(pathname === '/packages' || pathname === '/packages-details') ? '0px 5px 0px #09368F' : 'none'}
                color={(pathname === '/packages' || pathname === '/packages-details') ? 'white' : 'black'}
                onClick={() => setPathname('/packages')}
            >
                <Text fontSize='32px'>
                    <TbPackages />
                </Text>
                <Text fontSize='20px' textTransform='uppercase' fontWeight='normal'>
                    Packages
                </Text>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                pl='40px'
                py='20px'
                bg={pathname === '/credits' ? '#215ED7' : 'transparent'}
                cursor='pointer'
                gap='25px'
                mb={pathname === '/credits' ? '7px' : '10px'}
                boxShadow={pathname === '/credits' ? '0px 5px 0px #09368F' : 'none'}
                color={pathname === '/credits' ? 'white' : 'black'}
                onClick={() => setPathname('/credits')}
            >
                <Text fontSize='32px'>
                    <RiWallet3Fill />
                </Text>
                <Text fontSize='20px' textTransform='uppercase' fontWeight='normal'>
                    Credits
                </Text>
            </Box>
        </>
    );
};

export default Sidebar;