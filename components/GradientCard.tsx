import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const GradientCard = () => {
  return (
    <Box
      width='full'
      py={20}
      bg='radial-gradient(
          128.88% 128.88% 
          at 103.9% -10.39%, 
          #E84D70 0%, 
          #A337F6 53.09%, 
          #28A7ED 100%
        )'
      borderRadius='8px'
      color='white'
      display='flex'
      alignItems='center'
      justifyContent='center'
      fontWeight='bold'
      fontSize='xl'
      position='relative'
    >
      <Box position='absolute' bottom={5} left={10}>
        <Text textStyle='h2'>Frontend Mentor</Text>
        <Text textStyle='body2' opacity='75%'>
          Feedback Board
        </Text>
      </Box>
    </Box>
  );
};

export default GradientCard;
