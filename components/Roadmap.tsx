import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const ROAD_MAP = [
  {
    color: '#F49F85',
    label: 'Planned',
    value: '2',
  },
  {
    color: '#AD1FEA',
    label: 'In Progress',
    value: '3',
  },
  {
    color: '#62BCFA',
    label: 'Live',
    value: '1',
  },
] as const;

const Roadmap = () => {
  return (
    <Box px={100} p={10} borderRadius='10px' bg='#fff'>
      <Text>Roadmap</Text>
      <Box>
        {ROAD_MAP.map((item) => {
          return (
            <Flex justify='space-between' my={10} key={item.color}>
              <Box display='flex' alignItems='center'>
                <Box
                  borderRadius='50%'
                  width='10px'
                  height='10px'
                  bg={item.color}
                />
                <Text ml={2}>{item.label}</Text>
              </Box>
              <Box>
                <Text fontWeight={700} color='#647196'>
                  {item.value}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default Roadmap;
