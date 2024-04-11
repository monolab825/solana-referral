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
    const [displayPackage, setDisplayPackage]: any = useState({
        name: "",
        price: 0,
        description: ""
    });

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
                <ModalContent maxW={fullScreen ? '100%' : '1724px'} maxH={fullScreen ? '100%' : '86%'} m={fullScreen ? '0' : '20px'} overflowY='auto' borderRadius='none' sx={scrollbarHideStyles}>

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
                            <Flex alignItems='center' bg='#D9D9D9' h='44px' p={{ base: '1px', sm: '3px' }} gap={{ base: '7px', md: '14px' }}>
                                <Box p={{ base: '2px', sm: '5px' }} bg='white' cursor='pointer'>
                                    <Image minW='20px' src='https://i.ibb.co/4mzQdz8/Group-91.png' alt='img' />
                                </Box>
                                <Flex bg='#353590' h='100%' w='100%' border='2px solid #AFAFAF' alignItems='center'>
                                    <Text color='white' whiteSpace='nowrap' fontSize={{ base: '12px', md: '16px' }} ml={{ base: '7px', md: '14px' }} w={{ base: '150px', sm: '100%' }} overflowX='auto'>https://solana-referral.vercel.app{pathname}</Text>
                                </Flex>
                                <Flex gap={{ base: '3px', sm: '6px' }}>
                                    <Flex h='100%' w={{ base: '30px', sm: '33px' }} p={{ base: '3px', sm: '5px' }} border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={onClose} cursor='pointer'>
                                        <FaWindowMinimize />
                                    </Flex>
                                    {fullScreen ?
                                        <Flex h='100%' w={{ base: '30px', sm: '33px' }} p={{ base: '3px', sm: '5px' }} border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' cursor='pointer' onClick={() => setFullScreen(false)}>
                                            <FaRegWindowMaximize />
                                        </Flex>
                                        :
                                        <Flex h='100%' w={{ base: '30px', sm: '33px' }} p={{ base: '3px', sm: '5px' }} border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' cursor='pointer' onClick={() => setFullScreen(true)}>
                                            <FaRegWindowMaximize />
                                        </Flex>}
                                    <Flex h='100%' w='31px' p={{ base: '0', sm: '2px' }} border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={openModalClose} cursor='pointer'>
                                        <IoClose fontSize='24px' />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box
                            borderX={{ base: '8px solid #D9D9D9', md: '16px solid #D9D9D9' }}
                            borderBottom={{ base: '8px solid #D9D9D9', md: '16px solid #D9D9D9' }}
                        >
                            <Navbar {...{ pathname, setPathname }} />
                            <Box>
                                <Grid templateColumns={{ base: 'auto', xl: "332px 1fr" }} >
                                    <Box w='100%' maxW='332px' bg='#F5F5F5' pt='25px' display={{ base: 'none', xl: 'block' }}>
                                        <Sidebar {...{ pathname, setPathname }} />
                                    </Box>
                                    <Box px={{ base: '6px', md: '20px' }} py='20px'>
                                        {pathname === '/' && <HomeIndex />}
                                        {pathname === '/referral-activity' && <ReferralActivity />}
                                        {pathname === '/packages' && <Packages {...{ setPathname, setDisplayPackage }} />}
                                        {pathname === '/packages-details' && <PackageDetails displayPackage={displayPackage}  />}
                                        {pathname === '/credits' && <Credits />}
                                    </Box>
                                </Grid>
                            </Box>

                        </Box>
                    </Box>
                </ModalContent>
            </Modal>

            <ShutDownModal {...{ isStartOpen, onStartClose, openModalClose }} />

            <Flex w='100%' h='40px' bg='#A0A0A0' position='fixed' bottom='0' zIndex={1500}>
                <Flex w='100%'>
                    <Image src='https://i.ibb.co/VMhVHDw/image-53.png' cursor='pointer' onClick={isStartOpen ? onStartClose : onStartOpen} />
                    {showCase &&
                        <Flex
                            h='100%'
                            maxW='300px'
                            w='100%'
                            border='2px solid white'
                            borderLeft='2px solid #7F787F'
                            borderTop='2px solid #7F787F'
                            textAlign='center'
                            cursor='pointer'
                            px={{ base: '4px', md: '10px' }}
                            gap='5px'
                            onClick={isOpen ? onClose : onOpen}
                        >
                            <Image display='inline' w='30px' src='https://i.ibb.co/qysKfQ3/image-64-removebg-preview.png' />
                            <Text fontSize={{ base: '14', md: '18px' }} py='6px' whiteSpace='nowrap'>Solana Referral</Text>
                        </Flex>
                    }
                </Flex>
                <Timer />
            </Flex>
        </Box >
    );
};

export default MainPage;