'use client'
import React, { useState } from 'react';
import { Box, Flex, Grid, Image, Modal, ModalContent, Text, useDisclosure } from '@chakra-ui/react';
import Navbar from '../../core/navbar/Navbar';
import Sidebar from '../../core/sidebar/Sidebar';
import TotalReferredSection from './TotalReferredSection';
import HomeReuseCard from './HomeReuseCard';
import Packages from '../packages/Packages';
import { FaRegWindowMaximize, FaWindowMinimize } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

const HomeIndex = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [fullScreen, setFullScreen] = useState(false)
    const [showCase, setShowCase] = useState(false)

    const openModal = () => {
        onOpen();
        setShowCase(true)
    }
    const openModalClose = () => {
        onClose();
        setShowCase(false)
    }
    return (
        <Box>
            <Box maxW='92px' ml='20px' mt='20px' onClick={openModal}>
                <Image src='https://i.ibb.co/ZH6CcCr/image-62.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>My Computer</Text>
            </Box>
            <Box maxW='92px' ml='20px' mt='20px' onClick={openModal}>
                <Image src='https://i.ibb.co/mHbrTgb/image-63.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>MY FILES</Text>
            </Box>
            <Box maxW='120px' ml='20px' mt='20px' onClick={openModal}>
                <Image src='https://i.ibb.co/XJvWKVp/image-64.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>Solana Referral</Text>
            </Box>
            <Box maxW='92px' ml='20px' mt='20px' onClick={openModal}>
                <Image src='https://i.ibb.co/tYP6g89/image-65.png' alt='img' />
                <Text fontSize='14px' color='white' align='center'>Recycle bin</Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalContent maxW={fullScreen ? '100%' : '1724px'} maxH={fullScreen ? '100%' : '86%'} m={fullScreen ? '0' : '30px'} overflow='auto' borderRadius='none'>
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
                                    <Text color='white' fontSize='16px' ml='14px'>https://solana-referral.vercel.app/</Text>
                                </Flex>
                                <Flex gap='6px'>
                                    <Flex h='100%' w='33px' p='5px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={onClose} cursor='pointer'>
                                        <FaWindowMinimize />
                                    </Flex>
                                    {fullScreen ?
                                        <Flex h='100%' w='30px' p='3px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' cursor='pointer' onClick={() => setFullScreen(false)}>
                                            <FaRegWindowMaximize />
                                        </Flex>
                                        :
                                        <Flex h='100%' w='33px' p='4px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' cursor='pointer' onClick={() => setFullScreen(true)}>
                                            <FaRegWindowMaximize />
                                        </Flex>}
                                    <Flex h='100%' w='31px' p='1px' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={openModalClose} cursor='pointer'>
                                        <IoClose fontSize='24px' />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                        <Box border='16px solid #D9D9D9' borderTop='none'>
                            <Navbar />
                            <Grid templateColumns="332px 1fr" >
                                <Box w='100%' maxW='332px' bg='#F5F5F5' pt='25px'>
                                    <Sidebar />
                                </Box>
                                <Box>
                                    <Box p='30px' display='flex' gap='30px'>
                                        <TotalReferredSection />
                                        <Box w='100%'>
                                            <HomeReuseCard cardTitle='SOL Balance' amount='0.00' rate='~$0.00' />
                                            <HomeReuseCard cardTitle='My Package' amount='Unavailable' showButton />
                                            <HomeReuseCard cardTitle='Total Referral Commission' amount='$0.00' showButton />
                                            <HomeReuseCard cardTitle='My Credits' amount='0' showButton />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Box >
                </ModalContent>
            </Modal>

            <Flex w='100%' bg='#A0A0A0' position='fixed' bottom='0' >
                <Image src='https://i.ibb.co/VMhVHDw/image-53.png' />
                {showCase &&
                    <Flex h='100%' border='2px solid black' borderLeft='2px solid white' borderTop='2px solid #C0C0C0' textAlign='center' onClick={isOpen ? onClose : onOpen} cursor='pointer' alignItems='center'>
                        <Text color='white' fontSize='17px' px='20px' py='5px'>My ShowCase</Text>
                    </Flex>
                }
            </Flex>
        </Box>
    );
};

export default HomeIndex;