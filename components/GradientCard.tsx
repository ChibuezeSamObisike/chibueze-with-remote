import React from 'react';
import { Box } from '@chakra-ui/react';

const GradientCard = () => {
  return (
    <Box
      width='full'
      height='300px'
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
    >
      GradientCard
    </Box>
  );
};

export default GradientCard;
