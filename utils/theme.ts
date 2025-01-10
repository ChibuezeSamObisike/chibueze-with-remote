'use client';
import { extendTheme } from '@chakra-ui/react';
import { pxToRem } from '@/utils/pxToRem';

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },

  fonts: {},
  fontSizes: {},
  fontWeights: {},
  lineHeights: {},

  colors: {
    brand: {
      100: '#4661E6',
    },
  },

  components: {
    Badge: {
      baseStyle: {
        bg: '#F2F4FF',
        color: '#4661E6',
        borderRadius: '10px',
        paddingY: '5px',
        textTransform: 'capitalize',
        fontSize: pxToRem(13),
        cursor: 'pointer',
        fontWeight: 600,
      },
      sizes: {
        sm: {
          fontSize: 'sm',
          paddingX: '8px',
        },
        md: {
          fontSize: 'md',
          paddingX: '12px',
        },
      },
      defaultProps: {
        size: 'md',
      },
      variants: {
        filled: {
          bg: '#4661E6',
          color: '#fff',
        },
      },
    },
    Button: {
      baseStyle: {
        backgroundColor: '#AD1FEA',
        color: '#fff',
        borderRadius: '10px',
      },
      variants: {
        solid: {
          bg: '#AD1FEA',
          color: '#fff',
        },
      },
    },
  },

  textStyles: {
    h1: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'bold',
      fontSize: pxToRem(24),
      lineHeight: pxToRem(35),
      letterSpacing: '-0.33px',
    },
    h2: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'bold',
      fontSize: pxToRem(20),
      lineHeight: pxToRem(29),
      letterSpacing: '-0.25px',
    },
    h3: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'bold',
      fontSize: pxToRem(18),
      lineHeight: pxToRem(26),
      letterSpacing: '-0.25px',
      color: '#3A4374',
    },
    h4: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'bold',
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
      letterSpacing: '-0.2px',
    },
    body1: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'normal',
      fontSize: pxToRem(16),
      lineHeight: pxToRem(23),
      color: '#647196',
    },
    body2: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'normal',
      fontSize: pxToRem(15),
      lineHeight: pxToRem(22),
    },
    body3: {
      fontFamily: 'Jost, sans-serif',
      fontWeight: 'semibold',
      fontSize: pxToRem(13),
      lineHeight: pxToRem(19),
    },
  },

  styles: {
    global: () => ({
      body: {
        backgroundColor: '#F7F8FD',
        // props.colorMode === 'light' ? '#F7F8FD' : '#1F2430',
        // color: props.colorMode === 'light' ? '#3A4374' : '#F1F4F9',
      },
    }),
  },
});
