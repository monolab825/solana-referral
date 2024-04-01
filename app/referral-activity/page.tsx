import ReferralActivity from '@/src/componts/app/referrals/ReferralActivity';
import Navbar from '@/src/componts/core/navbar/Navbar';
import Sidebar from '@/src/componts/core/sidebar/Sidebar';
import { Box, Grid } from '@chakra-ui/react';
import React from 'react';

const ReferralActivityMain = () => {
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
                <Box p='30px'>
                    <ReferralActivity />
                </Box>
            </Grid>
        </Box >
    );
};

export default ReferralActivityMain;