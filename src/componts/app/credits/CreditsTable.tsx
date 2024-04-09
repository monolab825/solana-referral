import React from 'react';
import { Box, Flex, Image, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, VStack } from '@chakra-ui/react';

const data = [
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },
    {
        name: 'John Doe',
        date: '18 - 03 - 2024',
        level: '2',
        referrer: 'Aayush Shukla',
        credits: '$20',
        status: 'Active',
    },

];

const CreditsTable = () => {
    const isLargeScreen = useBreakpointValue({ base: false, lg: true });

    if (isLargeScreen) {
        return (
            <Table variant="simple">
                <Thead>
                    <Tr bg="#F2F2F5">
                        <Th>Full name</Th>
                        <Th>Date</Th>
                        <Th>Level</Th>
                        <Th>Referrer</Th>
                        <Th>Credits earned</Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((item, index) => (
                        <Tr key={index} bg={index % 2 ? '#fafafb' : 'transparent'}>
                            <Td>
                                <Flex alignItems="center" gap="12px">
                                    <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="img" w="32px" h="32px" />
                                    <Text fontSize="16px">{item.name}</Text>
                                </Flex>
                            </Td>
                            <Td>{item.date}</Td>
                            <Td>{item.level}</Td>
                            <Td>{item.referrer}</Td>
                            <Td>{item.credits}</Td>
                            <Td>{item.status}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        );
    } else {
        // For smaller screens, render a list-like layout
        return (
            <VStack spacing={4} align="stretch">
                {data.map((item, index) => (
                    <Box key={index} p={5} bg={index % 2 ? '#fafafb' : 'transparent'} shadow="md" borderWidth="1px" borderRadius="md">
                        <Flex alignItems="center" gap="12px">
                            <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt={item.name} w="32px" h="32px" />
                            <Text fontSize="16px" fontWeight="bold">{item.name}</Text>
                        </Flex>
                        <Text mt={2}>Date: {item.date}</Text>
                        <Text>Level: {item.level}</Text>
                        <Text>Referrer: {item.referrer}</Text>
                        <Text>Credits earned: {item.credits}</Text>
                        <Text>Status: {item.status}</Text>
                    </Box>
                ))}
            </VStack>
        );
    }
};

export default CreditsTable;
