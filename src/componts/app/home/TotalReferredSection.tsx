import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import NETWORK from "@/constants/networkConfig.json";

const TotalReferredSection = ({referralCode}: any) => {
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`${NETWORK.frontend_endpoint}/${referralCode}`);
            console.log('Text copied to clipboard');
          } catch (err) {
            console.error('Failed to copy text: ', err);
          }
    }

    return (
        <Box maxW='702px' w='100%' maxH={{ base: 'auto', lg: '500px' }} mb="20px" p='18px' border='1px solid #8AABED'>
            <Box display={{ base: 'block', lg: 'flex' }} gap='10px' justifyContent='space-between'>
                <Box>
                    <Text fontSize={{ base: '16px', xl: '20px' }} textTransform='uppercase'>Total Referred</Text>
                    <Text fontSize='38px'>00</Text>
                </Box>
                <Box>
                    <Text fontSize={{ base: '16px', xl: '20px' }} textTransform='uppercase'>Total users under me</Text>
                    <Text fontSize='38px'>00</Text>
                </Box>

            </Box>
            {referralCode !== "" && referralCode !== "no-code" && <Flex>
                <Box fontSize={{lg: "14px"}} p="10px 5px" border={"1px solid blue"} width={"90%"} >
                    <Text>{NETWORK.frontend_endpoint}/{referralCode}</Text>
                </Box>
                <Box cursor={"pointer"} onClick={copyToClipboard} >
                    <Text>Copy</Text>
                </Box>
            </Flex>}
        </Box>
    );
};

export default TotalReferredSection;