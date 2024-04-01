'use client'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import CreditsTable from '../credits/CreditsTable';
import { FaRegCircleCheck } from "react-icons/fa6";
import ReferralChart from './ReferralChart';

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

    return (
        <Box>
            <Flex w='100%' gap='20px'>
                <Box w='100%' maxW='704px' border='1px solid #8AABED' boxShadow='0px 5px 0px #215ED7' p='30px' mb='40px'>
                    <Flex alignItems='center' gap='12px' pb='20px' borderBottom='1px solid #8AABED80'>
                        <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                        <Text fontSize='24px'>
                            Earnings
                        </Text>
                    </Flex>
                    <Flex my='10px' justifyContent='space-between'>
                        <Text fontSize='16px' >
                            Total Referred $1004.00
                        </Text>
                        <Text fontSize='16px' >
                            Total Referred this month $100.00
                        </Text>
                    </Flex>
                    <ReferralChart />
                </Box>

                <Box w='100%'>
                    <Box w='100%' maxW='600px' border='1px solid #8AABED' boxShadow='0px 5px 0px #215ED7' p='30px' mb='20px'>
                        <Flex alignItems='center' gap='12px' pb='20px'>
                            <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                            <Text fontSize='24px'>
                                My Referral Code
                            </Text>
                        </Flex>
                        <Flex p='15px' border='1px solid #304F8E' alignItems='center' justifyContent='space-between'>
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

                    <Box w='100%' maxW='600px' border='1px solid #8AABED' boxShadow='0px 5px 0px #215ED7' p='30px' mb='40px' textTransform='uppercase'>
                        <Flex justifyContent='space-between' mb='50px'>
                            <Box>
                                <Text fontSize='20px'>
                                    Total Commission
                                </Text>
                                <Text fontSize='48px'>
                                    $100.00
                                </Text>
                            </Box>
                        </Flex>
                        <Flex justifyContent='end'>
                            <Button fontSize='20px' fontWeight='normal' bg='white' border='1px solid black' borderRadius='50px' mr='20px' p='14px 23px'>
                                Pending withdrawal
                            </Button>
                            <Button fontSize='20px' fontWeight='normal' color='white' bg='#215ED7' border='2px solid white' borderRadius='50px' p='14px 23px' _hover={{ color: 'black', bg: 'white', border: '2px solid #215ED7' }} >
                                Withdraw
                            </Button>
                        </Flex>
                    </Box>
                </Box>
            </Flex>

            <Box w='100%' border='1px solid #8AABED' p='30px' mb='40px' >
                <Flex alignItems='center' gap='12px' mb='20px'>
                    <Image src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='img' w='32px' h='32px' />
                    <Text fontSize='24px'>
                        User joining activity
                    </Text>
                </Flex>
                <Box
                    overflowX="auto"
                    maxW={{ base: 'auto' }}
                >
                    <CreditsTable />
                </Box>
            </Box>
            <Box w='100%' border='1px solid #8AABED' p='30px' mb='40px' fontSize='16px'>
                <Text fontSize='24px'>
                    What is the Referral Program?
                </Text>
                <Flex mb='15px'>
                    <Box minW='476px' w='100%'>
                        <Text fontSize='16px' mt='20px'>
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
                        <Text fontSize='16px' my='20px'>
                            Rule 80/20%<br />
                            Means you can withdraw 80%, will be sent directly to your metamask.
                        </Text>
                        <Text fontSize='16px' my='20px'>
                            20% remaining will be sent to LP Wallet and given the user Credits for that amount to be swapped later for our Token
                        </Text>
                        <Text fontSize='16px' mt='20px'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </Box>
                </Flex>
                <Text fontSize='24px' my='20px'>
                    Rules & Rewards
                </Text>
                <Text fontSize='16px'>
                    Different phases have different difficulty coefficients, which affect the number of credits earned per commission and the token value for airdrops. The coefficient increases as the number of people in the network grows. It’s sort of halving, the number of credit you can earn (by purchasing packages or commissions) decreases over time, so we will need an algorithm in it, that measures number of people and the difficulty coefficient, naturally if you join at the beginning will give you more credits from the package you purchase, then for example when there are already 10000 users, because the more people join The more coefficient grow.
                </Text>

                <Image mt='20px' src='https://i.ibb.co/L6d6mC6/image-32.png' alt='' />

                <Text fontSize='24px' mt='30px' mb='20px'>
                    Terms & Conditions
                </Text>
                <Text fontSize='16px'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Box>
        </Box >
    );
};

export default ReferralActivity;              