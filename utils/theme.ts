'use client';

import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {},
      fontSizes: {},
      fontWeights: {},
      lineHeights: {},
      colors: {
        brand: {
          100: { value: 'red' },
        },
      },
    },
    textStyles: {
      h1: {
        fontSize: '5.5rem',
        color: 'text.primary',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '4.0rem',
        color: 'text.primary',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: '3rem',
        color: 'text.primary',
        fontWeight: 'bold',
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
