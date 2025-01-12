'use client';

import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import Roadmap from '@/components/Roadmap';
import Filter from '@/components/Filter';

type IProps = {
  handleFilter: (item: string) => void;
  active: string;
};

const AppDrawer = ({ handleFilter, active }: IProps) => {
  return (
    <Drawer placement='right' onClose={() => {}} isOpen={true}>
      <DrawerOverlay zIndex={9} />
      <DrawerContent zIndex={9}>
        <DrawerBody bg='#f7f8fd' pt={25}>
          <Box display='flex' flexDirection='column' gap={4}>
            <Filter
              sx={{ display: 'flex' }}
              handleFilter={handleFilter}
              active={active}
            />
            <Roadmap sx={{ display: 'block' }} />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
