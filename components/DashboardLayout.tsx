'use client';
import Filter from '@/components/Filter';
import GradientCard from '@/components/GradientCard';
import Roadmap from '@/components/Roadmap';
import { pxToRem } from '@/utils/pxToRem';
import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      display='flex'
      alignItems='flex-start'
      justifyContent='space-between'
      width='80vw'
      mx='auto'
      gap={pxToRem(50)}
      my={100}
    >
      <Box width='30%'>
        <GradientCard />
        <Filter />
        <Roadmap />
      </Box>
      <Box width='70%'>{children}</Box>
    </Box>
  );
};

export default DashboardLayout;
