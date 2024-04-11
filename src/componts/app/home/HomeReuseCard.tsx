import { Box, Text, Flex } from '@chakra-ui/react';
import { IoMdArrowForward } from "react-icons/io";
import React from 'react';

const HomeReuseCard = ({ cardTitle, amount, rate, showButton, buttonAction }: any) => {
    return (
        <Box maxW={{ base: 'auto', md: '600px' }} w='100%' border='1px solid #8AABED' mb='20px' px='30' pt='30px' pb='38px' boxShadow='0px 5px 0px #215ED7' position='relative' textTransform='uppercase'>
            <Text fontSize={{ base: '20px', xl: '24px' }}>{cardTitle}</Text>
            <Text fontSize={{ base: '34px', xl: '44px' }}>{amount} <Text as='span' color='#37BC35' fontSize={{ base: '18px', sm: '24px' }} ml='18%'>{rate}</Text></Text>
            {showButton &&
                <Flex fontSize='24px' alignItems={"center"} color='white' bg='#1763FD' p='10px' position='absolute' right='16px' bottom='16px' cursor='pointer' onClick={buttonAction}>
                    {cardTitle == "My Package" && amount == "No package" && <Text>PURCHASE</Text>}
                    <IoMdArrowForward />
                </Flex>
            }
        </Box>
    );
};

export default HomeReuseCard;