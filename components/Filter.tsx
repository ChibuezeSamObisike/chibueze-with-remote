import { Box } from '@chakra-ui/react';
import React from 'react';

const FILTER = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'] as const;

const Filter = () => {
  return (
    <Box
      bg='#fff'
      flexWrap='wrap'
      borderRadius='10px'
      my={50}
      px={100}
      p={10}
      display='grid'
      gridTemplateColumns='1fr 1fr 1fr'
    >
      {FILTER.map((item) => (
        <Box
          mx={2}
          key={item}
          px={10}
          py={10}
          my={10}
          borderRadius='10px'
          bg='#F2F4FF'
          color='#4661E6'
          fontWeight={600}
          textAlign='center'
        >
          {item}
        </Box>
      ))}
    </Box>
  );
};

export default Filter;
