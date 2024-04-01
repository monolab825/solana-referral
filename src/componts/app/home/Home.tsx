'use client'
import React from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import Navbar from '../../core/navbar/Navbar';
import Sidebar from '../../core/sidebar/Sidebar';
import TotalReferredSection from './TotalReferredSection';
import HomeReuseCard from './HomeReuseCard';
import Packages from '../packages/Packages';

const HomeIndex = () => {
    return (
        <Box
            maxW='1724px'
            mx='auto'
        >
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
        </Box >
    );
};

export default HomeIndex;