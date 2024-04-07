import { Box, Grid, } from '@chakra-ui/react';
import Sidebar from '../../core/sidebar/Sidebar';
import TotalReferredSection from './TotalReferredSection';
import HomeReuseCard from './HomeReuseCard';

const HomeIndex = () => {

    return (

        <Box display='flex' gap='30px'>
            <TotalReferredSection />
            <Box w='100%'>
                <HomeReuseCard cardTitle='SOL Balance' amount='0.00' rate='~$0.00' />
                <HomeReuseCard cardTitle='My Package' amount='Unavailable' showButton />
                <HomeReuseCard cardTitle='Total Referral Commission' amount='$0.00' showButton />
                <HomeReuseCard cardTitle='My Credits' amount='0' showButton />
            </Box>
        </Box>
    );
};

export default HomeIndex;