import React from 'react';
import { Table, Tbody, Tr, Td, TableContainer, Flex, Image, Text } from '@chakra-ui/react'

const CreditsTable = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Tbody >
                    <Tr bg='#F2F2F5' >
                        <Td>
                            <Text my='6px'>
                                Full name
                            </Text>
                        </Td>
                        <Td>Date</Td>
                        <Td>Level</Td>
                        <Td>Referrer</Td>
                        <Td>Credits earned</Td>
                        <Td>Status</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Flex alignItems='center' gap='12px' >
                                <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                                <Text fontSize='16px'>
                                    John doe
                                </Text>
                            </Flex>
                        </Td>
                        <Td>18 - 03 - 2024</Td>
                        <Td>2</Td>
                        <Td>Aayush Shukla</Td>
                        <Td>$20</Td>
                        <Td>Status</Td>
                    </Tr>
                    <Tr bg='#fafafb'>
                        <Td>
                            <Flex alignItems='center' gap='12px'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                                <Text fontSize='16px'>
                                    John doe
                                </Text>
                            </Flex>
                        </Td>
                        <Td>18 - 03 - 2024</Td>
                        <Td>2</Td>
                        <Td>Aayush Shukla</Td>
                        <Td>$20</Td>
                        <Td>Status</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Flex alignItems='center' gap='12px' >
                                <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                                <Text fontSize='16px'>
                                    John doe
                                </Text>
                            </Flex>
                        </Td>
                        <Td>18 - 03 - 2024</Td>
                        <Td>2</Td>
                        <Td>Aayush Shukla</Td>
                        <Td>$20</Td>
                        <Td>Status</Td>
                    </Tr>
                    <Tr bg='#fafafb'>
                        <Td>
                            <Flex alignItems='center' gap='12px'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                                <Text fontSize='16px'>
                                    John doe
                                </Text>
                            </Flex>
                        </Td>
                        <Td>18 - 03 - 2024</Td>
                        <Td>2</Td>
                        <Td>Aayush Shukla</Td>
                        <Td>$20</Td>
                        <Td>Status</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <Flex alignItems='center' gap='12px' >
                                <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                                <Text fontSize='16px'>
                                    John doe
                                </Text>
                            </Flex>
                        </Td>
                        <Td>18 - 03 - 2024</Td>
                        <Td>2</Td>
                        <Td>Aayush Shukla</Td>
                        <Td>$20</Td>
                        <Td>Status</Td>
                    </Tr>
                    <Tr bg='#fafafb'>
                        <Td>
                            <Flex alignItems='center' gap='12px'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                                <Text fontSize='16px'>
                                    John doe
                                </Text>
                            </Flex>
                        </Td>
                        <Td>18 - 03 - 2024</Td>
                        <Td>2</Td>
                        <Td>Aayush Shukla</Td>
                        <Td>$20</Td>
                        <Td>Status</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default CreditsTable;