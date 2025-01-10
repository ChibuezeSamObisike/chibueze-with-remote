import UpVoteBadge from '@/components/UpVoteBadge';
import { Badge, Box, Text } from '@chakra-ui/react';
import React from 'react';

const SuggestionsCard = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      p={14}
      bgColor='#fff'
      borderRadius='10px'
      my={10}
    >
      <Box>
        <Text>Add tags for solutions</Text>
        <Text>Easier to search for solutions based on a specific stack.</Text>
        <Badge variant='solid'>Enhancement</Badge>
      </Box>
      <UpVoteBadge />
    </Box>
  );
};

export default SuggestionsCard;
