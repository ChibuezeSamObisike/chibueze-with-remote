import React from 'react';
import { Stack, Text, StyleProps } from '@chakra-ui/react';
import Image from 'next/image';
import { pxToRem } from '@/utils/pxToRem';

interface UpVoteBadgeProps {
  upvotes: number;
  sx?: StyleProps;
  direction?: 'row' | 'column';
}

const UpVoteBadge: React.FC<UpVoteBadgeProps> = ({
  upvotes,
  sx,
  direction = 'column',
}) => {
  return (
    <Stack
      direction={direction}
      backgroundColor='#F2F4FE'
      alignItems='center'
      justifyContent='center'
      py={5}
      px={5}
      borderRadius='10px'
      sx={sx}
    >
      <Image src='/upward-icon.svg' alt='Upvote Icon' width='12' height='8' />
      <Text fontWeight={700} fontSize={pxToRem(13)}>
        {upvotes}
      </Text>
    </Stack>
  );
};

export default UpVoteBadge;
