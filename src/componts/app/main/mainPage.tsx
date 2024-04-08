'use client'
import { Box, Button, Flex, Grid, Image, Input, Modal, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaRegWindowMaximize, FaWindowMinimize } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import Navbar from '../../core/navbar/Navbar';
import HomeIndex from '../home/Home';
import Sidebar from '../../core/sidebar/Sidebar';
import ReferralActivity from '../referrals/ReferralActivity';
import Packages from '../packages/Packages';
import Credits from '../credits/Credits';
import PackageDetails from '../packages/PackageDetails';
import Timer from '../../core/timer';
import ShutDownModal from '../../core/shutDownModal';

const MainPage = () => {

    const { isOpen: isLogInOpen, onOpen: onLogInOpen, onClose: onLogInClose } = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isStartOpen, onOpen: onStartOpen, onClose: onStartClose } = useDisclosure();
    const [fullScreen, setFullScreen] = useState(false)
    const [pathname, setPathname] = useState('/')
    const [showCase, setShowCase] = useState(false)

    useEffect(() => {
        onLogInOpen();
        onOpen();
        setShowCase(true)
    }, []);

    const openModal = () => {
        onOpen();
        setShowCase(true)
    }
    const openModalClose = () => {
        onClose();
        setShowCase(false)
    }
    const scrollbarHideStyles = {
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
    };

    return (
        <Box>
            <Box maxW='92px' ml='20px' mt='20px'>
                <Image src='https://i.ibb.co/ZH6CcCr/image-62.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>My Computer</Text>
            </Box>
            <Box maxW='92px' ml='20px' mt='20px'>
                <Image src='https://i.ibb.co/mHbrTgb/image-63.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>MY FILES</Text>
            </Box>
            <Box maxW='120px' ml='20px' mt='20px' onClick={openModal}>
                <Image src='https://i.ibb.co/XJvWKVp/image-64.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>Solana Referral</Text>
            </Box>
            <Box maxW='92px' ml='20px' mt='20px'>
                <Image src='https://i.ibb.co/tYP6g89/image-65.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>Recycle bin</Text>
            </Box>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent maxW={fullScreen ? '100%' : '1724px'} maxH={fullScreen ? '100%' : '86%'} m={fullScreen ? '0' : '30px'} overflowY='auto' borderRadius='none' sx={scrollbarHideStyles}>

                    <Modal isOpen={isLogInOpen} onClose={onLogInClose} >
                        <ModalOverlay bg="blackAlpha.700" />
                        <ModalContent maxW='674px' maxH='568px' zIndex={101} borderRadius='nones' mt='120px'>
                            <Box w='100%' h='100%'>
                                <Flex w='100%' border='3px solid black'>
                                    <Flex w='100%' border='2px solid #AFAFAF' >
                                        <Box borderRight='2px solid #AFAFAF' bg='#353590' w='100%' h='40px'></Box>
                                        <Flex px='5px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' alignItems='center' cursor='pointer' onClick={onLogInClose}>
                                            <IoClose fontSize='24px' />
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Box border='4px solid #AFAFAF' borderTop='0' p='20px'>
                                    <Text fontSize='24px' color='#162079' textTransform='uppercase' mb='10px'>Create an Account</Text>

                                    <Text fontSize='18px' color='#303C55' mb='10px'>Name</Text>
                                    <Input p='10px' h='58px' border='1px solid #304F8E' borderRadius='none' mb='20px' />

                                    <Text fontSize='18px' color='#303C55' mb='10px'>Email</Text>
                                    <Input p='10px' h='58px' border='1px solid #304F8E' borderRadius='none' mb='20px' />

                                    <Text fontSize='18px' color='#303C55' mb='10px'>Referral ID (optional)</Text>
                                    <Input p='10px' h='58px' border='1px solid #304F8E' borderRadius='none' mb='30px' />

                                    <Flex gap='16px' justifyContent='end' >
                                        <Button variant='outline' color='#303C55' borderColor='black' fontSize='16px' fontWeight='normal' borderRadius="30px" onClick={onLogInClose}>
                                            Cancel
                                        </Button>
                                        <Button border='none' color='white' bg='#215ED7' fontSize='16px' fontWeight='normal' borderRadius="30px">
                                            Create
                                        </Button>
                                    </Flex>
                                </Box>
                            </Box>
                        </ModalContent>
                    </Modal>
                    <Box
                        w='100%'
                        mx='auto'
                        position='relative'
                    >
                        <Box position='sticky' top='0' h='50px' border='3px solid black' zIndex={99}>
                            <Flex alignItems='center' bg='#D9D9D9' h='44px' p='3px' gap='14px'>
                                <Box p='5px' bg='white' cursor='pointer'>
                                    <Image src='https://i.ibb.co/4mzQdz8/Group-91.png' alt='img' />
                                </Box>
                                <Flex bg='#353590' h='100%' w='100%' border='2px solid #AFAFAF' alignItems='center'>
                                    <Text color='white' fontSize='16px' ml='14px'>https://solana-referral.vercel.app{pathname}</Text>
                                </Flex>
                                <Flex gap='6px'>
                                    <Flex h='100%' w='33px' p='5px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={onClose} cursor='pointer'>
                                        <FaWindowMinimize />
                                    </Flex>
                                    {fullScreen ?
                                        <Flex h='100%' w='33px' p='5px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' cursor='pointer' onClick={() => setFullScreen(false)}>
                                            <FaRegWindowMaximize />
                                        </Flex>
                                        :
                                        <Flex h='100%' w='33px' p='5px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' cursor='pointer' onClick={() => setFullScreen(true)}>
                                            <FaRegWindowMaximize />
                                        </Flex>}
                                    <Flex h='100%' w='31px' p='2px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={openModalClose} cursor='pointer'>
                                        <IoClose fontSize='24px' />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box border='16px solid #D9D9D9' borderTop='none'>
                            <Navbar {...{ pathname }} />
                            <Box>
                                <Grid templateColumns="332px 1fr" >
                                    <Box w='100%' maxW='332px' bg='#F5F5F5' pt='25px'>
                                        <Sidebar {...{ pathname, setPathname }} />
                                    </Box>
                                    <Box p='20px'>
                                        {pathname === '/' && <HomeIndex />}
                                        {pathname === '/referral-activity' && <ReferralActivity />}
                                        {pathname === '/packages' && <Packages {...{ setPathname }} />}
                                        {pathname === '/packages-details' && <PackageDetails />}
                                        {pathname === '/credits' && <Credits />}
                                    </Box>
                                </Grid>
                            </Box>

                        </Box>
                    </Box>
                </ModalContent>
            </Modal>

            <ShutDownModal {...{ isStartOpen, onStartClose, openModalClose }} />

            <Flex w='100%' h='40px' bg='#A0A0A0' position='fixed' bottom='0' >
                <Flex w='100%'>
                    <Image src='https://i.ibb.co/VMhVHDw/image-53.png' cursor='pointer' onClick={isStartOpen ? onStartClose : onStartOpen} />
                    {showCase &&
                        <Flex h='100%' maxW='300px' w='100%' border='2px solid white' borderLeft='2px solid #7F787F' borderTop='2px solid #7F787F' textAlign='center' cursor='pointer' onClick={isOpen ? onClose : onOpen} alignItems='center' px='10px' gap='5px'>
                            <Image display='inline' w='30px' src='https://i.ibb.co/qysKfQ3/image-64-removebg-preview.png' />
                            <Text fontSize='18px' py='6px'>Solana Referral</Text>
                        </Flex>
                    }
                </Flex>
                <Timer />
            </Flex>
        </Box >
    );
};

export default MainPage;