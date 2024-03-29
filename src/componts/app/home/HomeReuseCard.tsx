import { Box, Text } from '@chakra-ui/react';
import { IoMdArrowForward } from "react-icons/io";
import React from 'react';

const HomeReuseCard = ({ cardTitle, amount, rate, showButton }: any) => {
    return (
        <Box maxW='600px' w='100%' border='1px solid #8AABED' mb='20px' px='30' pt='30px' pb='38px' boxShadow='0px 5px 0px #215ED7' position='relative' textTransform='uppercase'>
            <Text fontSize='24px'>{cardTitle}</Text>
            <Text fontSize='44px'>{amount} <Text as='span' color='#37BC35' fontSize='24px' ml='18%'>{rate}</Text></Text>
            {showButton &&
                <Box fontSize='24px' color='white' bg='#1763FD' p='10px' position='absolute' right='16px' bottom='16px' cursor='pointer'>
                    <IoMdArrowForward />
                </Box>
            }
        </Box>
    );
};

export default HomeReuseCard;