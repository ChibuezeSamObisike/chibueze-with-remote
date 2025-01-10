import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const GradientCard = () => {
  return (
    <MotionBox
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
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05 }}
    >
      <Box position='absolute' bottom={5} left={10}>
        <MotionText
          textStyle='h2'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Frontend Mentor
        </MotionText>
        <MotionText
          textStyle='body2'
          opacity='75%'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Feedback Board
        </MotionText>
      </Box>
    </MotionBox>
  );
};

const MotionText = motion(Text);

export default GradientCard;
