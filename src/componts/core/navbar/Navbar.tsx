'use client'
import React, { useEffect } from 'react';
import { Box, Flex, Text, Image, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton, WalletDisconnectButton, } from '@solana/wallet-adapter-react-ui';
import { RiMenuFoldLine, RiWallet3Fill } from 'react-icons/ri';
import { TbPackages } from 'react-icons/tb';
import { LuLineChart } from 'react-icons/lu';
import { IoHome } from 'react-icons/io5';

const Navbar = ({ pathname, setPathname }: any) => {
    const { wallet, connect, disconnect, select } = useWallet();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleConnect = async () => {
        console.log(wallet);
        select(wallet?.adapter.name || null)
        try {
            await connect();
        } catch (error) {
            console.log("error")
        }
    };

    const getProvider = () => {
        if ("solana" in window) {
            const provider = (window as any).solana;
            if (provider.isPhantom) {
                return provider;
            }
        }
        window.open("https://phantom.app/", "_blank");
    };

    return (
        <Box bg='white' w='100%' display='flex' boxShadow="0 9px 10px -5px rgba(0, 0, 0, 0.2)">
            <Flex alignItems='center' h={{ base: '78px', md: '96px' }} w={{ base: 'auto', md: '100%' }} maxW='332px' pt='18px' >
                <Box w='53px' h='53px' ml={{ base: '15px', md: '40px' }} mb='18px' borderRadius='40px' bg='#DEDEDE'>
                    <Image src="https://i.ibb.co/ZhdBpK3/image-67.png" />
                </Box>
            </Flex>
            <Flex h={{ base: '78px', md: '96px' }} w='100%' alignItems='center' justifyContent={{ base: 'end', md: 'space-between' }} px={{ base: '15px', lg: '40px' }}>
                <Text fontSize='18px' display={{ base: 'none', md: 'block' }}>
                    <u>USER
                        {pathname === '/' && ' / Home'}
                        {pathname === '/referral-activity' && ' / Referral Activity'}
                        {pathname === '/packages' && ' / Packages'}
                        {pathname === '/packages-details' && ' / Packages / Details'}
                        {pathname === '/credits' && ' / Credits'}
                    </u>
                </Text>
                <Flex alignItems='center' gap={{ base: '10px', sm: '24px' }}>

                    <WalletMultiButton style={{ background: "#215ED7", borderRadius: '40px', whiteSpace: 'nowrap' }} />

                    <Image
                        w='42px'
                        h='42px'
                        display='inline'
                        src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
                        alt='navbar-notification-icon'
                    />
                    <Box
                        display={{ base: 'block', xl: 'none' }}
                        fontSize='28px'
                        bg='gray.300'
                        p='4px'
                        borderRadius='10px'
                        onClick={onOpen}
                    >
                        <RiMenuFoldLine />
                    </Box>
                </Flex>
            </Flex>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody p='0' onClick={onClose}>
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
                        <Box
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
                        </Box>
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
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;