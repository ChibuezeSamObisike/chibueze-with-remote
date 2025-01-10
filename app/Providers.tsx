'use client';

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/utils/theme';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default Providers;
