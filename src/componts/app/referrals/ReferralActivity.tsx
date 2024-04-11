'use client'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreditsTable from '../credits/CreditsTable';
import { FaRegCircleCheck } from "react-icons/fa6";
import ReferralChart from './ReferralChart';
import TreeChart from '../../core/tree/treeview';

const ReferralActivity = () => {
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = async (text: any) => {
        if ('clipboard' in navigator) {
            try {
                await navigator.clipboard.writeText(text);
                setCopySuccess(true);
            } catch (err) {
                setCopySuccess(false);
            }
        } else {
            setCopySuccess(false);
        }
    };

    if (copySuccess) {
        setTimeout(() => {
            setCopySuccess(false);
        }, 2000)
    }
    const data = [
        { "name": "Level 2: A", "parent": "Top Level" },
        { "name": "Top Level" }, // parent is implicitly null
        { "name": "Son of A", "parent": "Level 2: A" },
        { "name": "Daughter of A", "parent": "Level 2: A" },
        { "name": "Daughter of A", "parent": "Level 2: A" },
        { "name": "Level 3: d", "parent": "Son of A" },
        { "name": "Level 3: d", "parent": "Son of A" },
        { "name": "Level 3: 3", "parent": "Son of A" },
        { "name": "Level 3: 32", "parent": "Level 3: 3" },
        { "name": "Level 3: d", "parent": "Son of A" },
        { "name": "Level 3: 21", "parent": "Son of A" },
        { "name": "Level 2: B", "parent": "Top Level" },
        { "name": "Level 2: B", "parent": "Top Level" },
        { "name": "Level 2: B", "parent": "Top Level" }
    ];
    return (
        <Box>
            <Flex display='flex' w='100%' flexDirection={{ base: 'column-reverse', '2xl': 'row' }} gap='20px'>
                <Box w='100%' border='1px solid #8AABED' boxShadow='0px 5px 0px #215ED7' p={{ base: '15px', md: '30px' }} mb={{ base: '20px', sm: '40px' }}>
                    <Flex w='100%' alignItems='center' gap='12px' pb='20px' borderBottom='1px solid #8AABED80'>
                        <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                        <Text fontSize='24px'>
                            Earnings
                        </Text>
                    </Flex>
                    <Flex w='100%' display={{ base: 'block', md: 'flex' }} my='10px' justifyContent='space-between'>
                        <Text fontSize={{ base: '14px', sm: '16px' }} >
                            Total Referred $1004.00
                        </Text>
                        <Text fontSize={{ base: '14px', sm: '16px' }} >
                            Total Referred this month $100.00
                        </Text>
                    </Flex>
                    <ReferralChart />
                </Box>

                <Box w='100%'>
                    <Box w='100%' maxW={{ base: 'auto', md: '600px' }} border='1px solid #8AABED' boxShadow='0px 5px 0px #215ED7' p={{ base: '15px', md: '30px' }} mb='20px'>
                        <Flex alignItems='center' gap='12px' pb='20px'>
                            <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                            <Text fontSize={{ base: '20px', sm: '24px' }}>
                                My Referral Code
                            </Text>
                        </Flex>
                        <Flex p={{ base: '8px', sm: '15px' }} border='1px solid #304F8E' alignItems='center' justifyContent='space-between'>
                            <Text fontSize='14px' cursor='copy'>
                                https://solana.com/refferral/01jDf4
                            </Text>
                            {copySuccess ?
                                <Text color='green' fontSize='24px'>
                                    <FaRegCircleCheck />
                                </Text>
                                :
                                <Image
                                    src='https://i.ibb.co/jDr833P/file-copy-line.png'
                                    cursor='pointer'
                                    alt='img'
                                    w='24px'
                                    h='24px'
                                    onClick={() => copyToClipboard('https://solana.com/refferral/01jDf4')}
                                />}
                        </Flex>
                    </Box>

                    <Box w='100%' maxW={{ base: 'auto', md: '600px' }} border='1px solid #8AABED' boxShadow='0px 5px 0px #215ED7' p={{ base: '15px', md: '30px' }} mb={{ base: '20px', sm: '40px' }} textTransform='uppercase'>
                        <Flex justifyContent='space-between' mb='50px'>
                            <Box>
                                <Text fontSize={{ base: '18px', sm: '20px' }}>
                                    Total Commission
                                </Text>
                                <Text fontSize={{ base: '40px', sm: '48px' }}>
                                    $100.00
                                </Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent='end' flexDirection={{ base: 'column', sm: 'row' }}>
                            <Button fontSize={{ base: '16px', md: '20px' }} fontWeight='normal' bg='white' border='1px solid black' borderRadius='50px' mr={{ base: '0px', sm: '20px' }} p={{ base: '10px 15px', md: '14px 23px' }}>
                                Pending withdrawal
                            </Button>
                            <Button fontSize={{ base: '16px', md: '20px' }} fontWeight='normal' color='white' bg='#215ED7' border='2px solid white' borderRadius='50px' p={{ base: '10px 15px', md: '14px 23px' }} _hover={{ color: 'black', bg: 'white', border: '2px solid #215ED7' }} >
                                Withdraw
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>

            <Box w='100%' border='1px solid #8AABED' p={{ base: '15px', md: '30px' }} mb='40px' >
                <Flex alignItems='center' gap='12px' mb='20px'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                    <Text fontSize={{ base: '20px', sm: '24px' }}>
                        User joining activity
                    </Text>
                </Flex>
                <Box >
                    <CreditsTable />
                </Box>
            </Box>
            <Box w='100%' border='1px solid #8AABED' p={{ base: '15px', md: '30px' }} mb='40px' >
                <Flex alignItems='center' gap='12px' mb='20px'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                    <Text fontSize={{ base: '20px', sm: '24px' }}>
                        My referrals
                    </Text>
                </Flex>
                <Box >
                    <TreeChart data={data} />
                </Box>
            </Box>
            <Box border='1px solid #8AABED' p={{ base: '15px', md: '30px' }} mb='40px' fontSize={{ base: '14px', sm: '16px' }}>
                <Text fontSize={{ base: '20px', sm: '24px' }}>
                    What is the Referral Program?
                </Text>

                <Flex display={{ base: 'block', md: 'flex' }} mb='15px'>
                    <Box minW={{ base: '100%', md: '476px' }} w='100%'>
                        <Text fontSize={{ base: '14px', sm: '16px' }} mt='20px'>
                            Compensation Plan [Distribution plan 85% +5%]Unilever : 85% PAYOUT to Top Line till 10th Level
                        </Text>
                        <Text>
                            <br /> 1 LEVEL: 10%
                            <br /> 2 LEVEL: 10%
                            <br /> 3 LEVEL: 10% BRONZE
                            <br /> 4 LEVEL: 10% SILVER
                            <br /> 5 LEVEL: 10% GOLD
                            <br /> 6 LEVEL: 10% EMERALD
                            <br /> 7 LEVEL: 7.5% DIAMOND
                            <br /> 8 LEVEL: 7.5% BLUE DIAMOND
                            <br /> 9 LEVEL: 5% BLACK DIAMOND
                            <br /> 10 LEVEL: 5% CROWN DIAMOND
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={{ base: '14px', sm: '16px' }} my='20px'>
                            Rule 80/20%<br />
                            Means you can withdraw 80%, will be sent directly to your metamask.
                        </Text>
                        <Text fontSize={{ base: '14px', sm: '16px' }} my='20px'>
                            20% remaining will be sent to LP Wallet and given the user Credits for that amount to be swapped later for our Token
                        </Text>
                        <Text fontSize={{ base: '14px', sm: '16px' }} mt='20px'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </Box>
                </Flex>
                <Text fontSize='24px' my='20px'>
                    Rules & Rewards
                </Text>
                <Text fontSize={{ base: '14px', sm: '16px' }}>
                    Different phases have different difficulty coefficients, which affect the number of credits earned per commission and the token value for airdrops. The coefficient increases as the number of people in the network grows. It’s sort of halving, the number of credit you can earn (by purchasing packages or commissions) decreases over time, so we will need an algorithm in it, that measures number of people and the difficulty coefficient, naturally if you join at the beginning will give you more credits from the package you purchase, then for example when there are already 10000 users, because the more people join The more coefficient grow.
                </Text>

                <Image mt='20px' maxW={{ base: '260px', sm: '100%' }} src='https://i.ibb.co/L6d6mC6/image-32.png' alt='' />

                <Text fontSize='24px' mt='30px' mb='20px'>
                    Terms & Conditions
                </Text>
                <Text fontSize={{ base: '14px', sm: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Box>
        </Box >
    );
};

export default ReferralActivity;              