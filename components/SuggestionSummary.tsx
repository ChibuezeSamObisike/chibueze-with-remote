'use client';

import SortMenu from '@/components/SortMenu';
import { pxToRem } from '@/utils/pxToRem';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface IProps {
  handleSort: (s: string) => void;
  activeSort?: string;
}

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const SuggestionSummary: FC<IProps> = ({ handleSort, activeSort }) => {
  return (
    <MotionBox
      bg='#373F68'
      display='flex'
      flexDirection={'row'}
      alignItems='center'
      justifyContent='space-between'
      px={['4', '5']}
      py={{ base: 4, md: pxToRem(10) }}
      color='#fff'
      borderRadius={{ base: 0, md: '10px' }}
      mb={{ md: 10 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <MotionFlex
        align='center'
        py={2}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
      >
        <Box display={{ base: 'none', md: 'flex' }} alignItems='center'>
          <Image
            src='/bulb-icon.svg'
            width='24'
            height='24'
            style={{ width: '24px' }}
            alt='bulb-icon'
          />
          <Text textStyle='h3' color='#fff' ml={['3', '5']}>
            6 Suggestions
          </Text>
        </Box>
        <MotionBox
          display='flex'
          ml={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          alignItems='center'
        >
          <Text fontSize={{ base: pxToRem(13), lg: pxToRem(14) }}>
            Sort by:
          </Text>
          <SortMenu handleSort={handleSort} activeSort={activeSort} />
        </MotionBox>
      </MotionFlex>

      <MotionButton
        width={{ base: '40%', md: 'auto' }}
        // mt={['4', '0']}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
      >
        + Add feedback
      </MotionButton>
    </MotionBox>
  );
};

export default SuggestionSummary;
