'use client';
import { Button, useColorMode } from '@chakra-ui/react';

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ColorModeSwitcher;
