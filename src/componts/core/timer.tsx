import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        setTime(new Date().toLocaleTimeString());

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Flex display={{ base: 'none', sm: 'block' }} h='32px' my='auto' px='10px' mr='2' w='100%' maxW='130px' border='2px solid white' borderLeft='2px solid #7F787F' borderTop='2px solid #7F787F' textAlign='center' cursor='pointer' alignItems='center' justifyContent='center'>
            <Text>{time || 'Loading time...'}</Text>
        </Flex>
    );
};

export default Timer;
