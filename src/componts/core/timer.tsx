'use client'
import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);
    return (
        <Flex h='32px' my='auto' px='10px' mr='2' w='100%' maxW='130px' border='2px solid white' borderLeft='2px solid #7F787F' borderTop='2px solid #7F787F' textAlign='center' cursor='pointer' alignItems='center' justifyContent='center'>
            <Text>{time}</Text>
        </Flex>
    );
};

export default Timer;