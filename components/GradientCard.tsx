import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Image from 'next/image';

const MotionBox = motion(Box);

interface IProps {
  isOpen: boolean;
  onToggle: () => void;
}

const GradientCard = ({ isOpen, onToggle }: IProps) => {
  return (
    <MotionBox
      width='full'
      py={{ base: 5, md: 20 }}
      bg='radial-gradient(
          128.88% 128.88% 
          at 103.9% -10.39%, 
          #E84D70 0%, 
          #A337F6 53.09%, 
          #28A7ED 100%
        )'
      borderRadius={{ base: 0, md: '8px' }}
      color='white'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      fontWeight='bold'
      fontSize='xl'
      position='relative'
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05 }}
      pr={{ base: 5 }}
      zIndex={100}
    >
      <Box
        position={{ md: 'absolute' }}
        textAlign={{ base: 'left' }}
        bottom={{ md: 35, lg: 15 }}
        left={{ md: 5, lg: 10 }}
        width={{ base: '100%' }}
        px={{ base: 10, md: 0 }}
      >
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
      <Box display={{ base: 'block', md: 'none' }}>
        <Image
          onClick={onToggle}
          alt=''
          src={isOpen ? '/menu-close.svg' : '/menu-open.svg'}
          width={20}
          height={17}
        />
      </Box>
    </MotionBox>
  );
};

const MotionText = motion(Text);

export default GradientCard;
