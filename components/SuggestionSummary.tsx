'use client';
import { pxToRem } from '@/utils/pxToRem';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const SuggestionSummary = () => {
  return (
    <Box
      bg='#373F68'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      px={50}
      py={pxToRem(20)}
      color='#fff'
      borderRadius='10px'
      mb={10}
    >
      <Flex align='center'>
        <Image
          src='/bulb-icon.svg'
          width='24'
          height='24'
          style={{ width: '24px' }}
          alt='bulb-con'
        />
        <Text ml={5}>6 Suggestions</Text>
      </Flex>
      <Box>
        <Text>Sort by : Most Upvotes</Text>
      </Box>
      <Button>Add feedback</Button>
    </Box>
  );
};

export default SuggestionSummary;
