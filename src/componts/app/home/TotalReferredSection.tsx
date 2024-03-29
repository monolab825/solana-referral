import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TotalReferredSection = () => {
    return (
        <Box display='flex' justifyContent='space-between' maxW='702px' w='100%' maxH='115px' p='18px' border='1px solid #8AABED'>
            <Box>
                <Text fontSize='20px' textTransform='uppercase'>Total Referred</Text>
                <Text fontSize='38px'>00</Text>
            </Box>
            <Box>
                <Text fontSize='20px' textTransform='uppercase'>Total users under me</Text>
                <Text fontSize='38px'>00</Text>
            </Box>
        </Box>
    );
};

export default TotalReferredSection;