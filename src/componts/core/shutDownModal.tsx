import { Box, Flex, Image, Modal, ModalContent, Text } from '@chakra-ui/react';
import React from 'react';

const ShutDownModal = ({ isStartOpen, onStartClose, openModalClose }: any) => {
    return (
        <Modal isOpen={isStartOpen} onClose={onStartClose}>
            <ModalContent maxW='256px' position='absolute' borderRadius='0' bottom='40px' left='0' m='0' bg='rgb(195, 198, 202)' border='2px solid #7F787F' borderLeft='2px solid white' borderTop='2px solid white'>
                <Flex flexDirection='row' alignItems='end'>
                    <Box bg='#86898d'>
                        <Text
                            w='64px'
                            fontSize="32px"
                            padding="8px 4px 64px"
                            letterSpacing="1px"
                            color="rgb(195, 198, 202)"
                            transform="scale(-1)"
                            sx={{
                                textOrientation: 'sideways', // Not directly supported as a prop by Chakra UI, so using sx
                                writingMode: 'tb-rl',
                            }}
                        >
                            HeffernanOS
                        </Text>
                    </Box>
                    <Flex alignItems='center' p='6px' borderTop='1px solid rgb(134, 137, 141)' w='100%' cursor='pointer' onClick={() => { openModalClose(), onStartClose() }}>
                        <Image w='32px' h='32px' src='https://i.ibb.co/88p5QZH/image-62-removebg-preview.png' alt='img' />
                        <Text>Sh<u>u</u>t Down..</Text>
                    </Flex>
                </Flex>
            </ModalContent>
        </Modal>
    );
};

export default ShutDownModal;