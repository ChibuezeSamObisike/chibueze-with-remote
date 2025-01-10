import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
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
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Text textStyle='h3'>Roadmap</Text>
        <Text cursor='pointer' textDecor='underline' color='#4661E6'>
          View
        </Text>
      </Box>
      <Box>
        {ROAD_MAP.map((item, index) => {
          return (
            <motion.div
              key={item.color}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.3,
                type: 'spring',
                stiffness: 100,
              }}
            >
              <Flex justify='space-between' my={2}>
                <Box display='flex' alignItems='center'>
                  <Box
                    borderRadius='50%'
                    width='10px'
                    height='10px'
                    bg={item.color}
                  />
                  <Text ml={2} variant='body1'>
                    {item.label}
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight={700} color='#647196'>
                    {item.value}
                  </Text>
                </Box>
              </Flex>
            </motion.div>
          );
        })}
      </Box>
    </Box>
  );
};

export default Roadmap;
