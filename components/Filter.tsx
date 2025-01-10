import { Badge, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const FILTER = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'] as const;
type IProps = {
  handleFilter: (item: string) => void;
  active: string;
};

const Filter = ({ handleFilter, active }: IProps) => {
  return (
    <Box
      bg='#fff'
      flexWrap='wrap'
      borderRadius='10px'
      my={50}
      px={5}
      p={5}
      display='flex'
      width='100%'
    >
      {FILTER.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
        >
          <Badge
            onClick={() => handleFilter(item)}
            mr={3}
            mb={3}
            px={5}
            variant={active === item ? 'filled' : ''}
            _hover={{
              backgroundColor: '#CFD7FF',
            }}
          >
            {item}
          </Badge>
        </motion.div>
      ))}
    </Box>
  );
};

export default Filter;
