'use client';

import SortMenu from '@/components/SortMenu';
import { pxToRem } from '@/utils/pxToRem';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProps {
  handleSort: (s: string) => void;
}

const SuggestionSummary: FC<IProps> = ({ handleSort }) => {
  return (
    <Box
      bg='#373F68'
      display='flex'
      flexDirection={['column', 'row']}
      alignItems='center'
      justifyContent='space-between'
      px={['4', '5']}
      py={pxToRem(20)}
      color='#fff'
      borderRadius='10px'
      mb={10}
    >
      <Flex align='center' mb={['4', '0']}>
        {' '}
        <Image
          src='/bulb-icon.svg'
          width='24'
          height='24'
          style={{ width: '24px' }}
          alt='bulb-con'
        />
        <Text textStyle='h3' color='#fff' ml={['3', '5']}>
          6 Suggestions
        </Text>
      </Flex>
      <Box mb={['4', '0']}>
        {' '}
        <Text>
          Sort by : <b> Most Upvotes</b>
        </Text>
        <SortMenu handleSort={handleSort} />
      </Box>
      <Button width={['100%', 'auto']} mt={['4', '0']}>
        {' '}
        + Add feedback
      </Button>
    </Box>
  );
};

export default SuggestionSummary;
