import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      height='100vh'
      justifyContent='center'
      minH='100vh'
    >
      <Text>Hold a minute laoding....</Text>
    </Box>
  );
};

export default Loader;
