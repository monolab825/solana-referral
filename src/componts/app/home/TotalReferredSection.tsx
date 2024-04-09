import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TotalReferredSection = () => {
    return (
        <Box display={{ base: 'block', lg: 'flex' }} gap='10px' justifyContent='space-between' maxW='702px' w='100%' maxH={{ base: 'auto', lg: '115px' }} p='18px' border='1px solid #8AABED' mb={'20px'}>
            <Box>
                <Text fontSize={{ base: '16px', xl: '20px' }} textTransform='uppercase'>Total Referred</Text>
                <Text fontSize='38px'>00</Text>
            </Box>
            <Box>
                <Text fontSize={{ base: '16px', xl: '20px' }} textTransform='uppercase'>Total users under me</Text>
                <Text fontSize='38px'>00</Text>
            </Box>
        </Box>
    );
};

export default TotalReferredSection;