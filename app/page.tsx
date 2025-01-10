import React from 'react';

import { Box, Text } from '@chakra-ui/react';
import SuggestionsCard from '@/components/SuggestionsCard';
import SuggestionSummary from '@/components/SuggestionSummary';

const Page = () => {
  return (
    <div>
      <SuggestionSummary />
      <div>
        <Box color='brand.100' textStyle='h1'>
          Hello world
        </Box>
        <Text textStyle='h2'>Hello world</Text>
        <Text textStyle='h3'>Hello world</Text>
        <Text textStyle='h4'>Hello world</Text>
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((i) => (
          <SuggestionsCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Page;
