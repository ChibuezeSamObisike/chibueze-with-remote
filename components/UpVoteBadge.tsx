import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { pxToRem } from '@/utils/pxToRem';

interface UpVoteBadgeProps {
  upvotes: number;
}

const UpVoteBadge: React.FC<UpVoteBadgeProps> = ({ upvotes }) => {
  return (
    <Stack
      backgroundColor='#F2F4FE'
      alignItems='center'
      justifyContent='center'
      py={5}
      px={5}
      borderRadius='10px'
    >
      <Image src='/upward-icon.svg' alt='Upvote Icon' width='12' height='8' />
      <Text fontWeight={700} fontSize={pxToRem(13)}>
        {upvotes}
      </Text>
    </Stack>
  );
};

export default UpVoteBadge;
