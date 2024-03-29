import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const SidebarItem = ({ icon, label, path, active = false }: any) => {

    return (
        <Link href={path}>
            <Box
                display='flex'
                alignItems='center'
                pl='40px'
                py='20px'
                bg={active ? '#215ED7' : 'transparent'}
                cursor='pointer'
                gap='25px'
                mb={active ? '7px' : '10px'}
                boxShadow={active ? '0px 5px 0px #09368F' : 'none'}
                color={active ? 'white' : 'black'}
            >
                <Text fontSize='32px'>
                    {icon}
                </Text>
                <Text fontSize='20px' textTransform='uppercase' fontWeight='normal'>
                    {label}
                </Text>
            </Box>
        </Link>

    );
};

export default SidebarItem;