'use client';

import EmptyState from '@/components/EmptyState';
import Filter from '@/components/Filter';
import GradientCard from '@/components/GradientCard';
import Roadmap from '@/components/Roadmap';
import SuggestionsCard from '@/components/SuggestionsCard';
import SuggestionSummary from '@/components/SuggestionSummary';
import useFeature from '@/hooks/useFeature';
import { pxToRem } from '@/utils/pxToRem';
import { Box } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const DashboardLayout = () => {
  const {
    suggestions,
    activeSuggestion,
    activeSort,
    handleFilterSuggestions,
    handleSortSuggestions,
  } = useFeature();

  return (
    <Box
      display='flex'
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems='flex-start'
      justifyContent='space-between'
      width={['90%', '100%', '80vw']}
      mx='auto'
      gap={['4', '6', pxToRem(50)]}
      my={100}
      px={['2', '4', '8']}
    >
      <Box width={['100%', '100%', '100%', '30%']} mb={['6', '6', '0']}>
        <GradientCard />
        <Filter
          handleFilter={handleFilterSuggestions}
          active={activeSuggestion}
        />
        <Roadmap />
      </Box>

      <Box width={['100%', '100%', '100%', '65%']} pl={['0', '0', '4']}>
        <SuggestionSummary
          activeSort={activeSort}
          handleSort={handleSortSuggestions}
        />
        <Box>
          {suggestions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                type: 'spring',
                stiffness: 100,
                damping: 25,
              }}
            >
              <SuggestionsCard {...item} />
            </motion.div>
          ))}
        </Box>
        <Box mt={4}>{suggestions.length === 0 && <EmptyState />}</Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
