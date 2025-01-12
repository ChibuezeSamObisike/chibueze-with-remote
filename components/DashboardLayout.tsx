'use client';

import EmptyState from '@/components/EmptyState';
import Filter from '@/components/Filter';
import GradientCard from '@/components/GradientCard';
import Roadmap from '@/components/Roadmap';
import SuggestionsCard from '@/components/SuggestionsCard';
import SuggestionSummary from '@/components/SuggestionSummary';
import useFeature from '@/hooks/useFeature';
import { Box, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import AppDrawer from '@/components/AppDrawer';

const DashboardLayout = () => {
  const {
    suggestions,
    activeSuggestion,
    activeSort,
    handleFilterSuggestions,
    handleSortSuggestions,
  } = useFeature();

  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <AppDrawer
        isOpen={isOpen}
        onClose={onClose}
        handleFilter={handleFilterSuggestions}
        active={activeSort}
      />
      <Box
        display='flex'
        flexDirection={['column', 'column', 'column', 'row']}
        alignItems='flex-start'
        justifyContent='space-between'
        width={{ base: '100%', md: '90vw', lg: '80vw' }}
        mx='auto'
        gap={{ md: 4 }}
        my={{ base: 0, md: 100 }}
      >
        <Box
          display='grid'
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(1, 1fr)',
          }}
          gap={4}
          width={{ base: '100%', lg: '25%' }}
          mb={{ base: 0, md: 6 }}
        >
          <GradientCard onToggle={onToggle} isOpen={isOpen} />
          <Filter
            handleFilter={handleFilterSuggestions}
            active={activeSuggestion}
          />
          <Roadmap />
        </Box>

        <Box width={['100%', '100%', '100%', '75%']} pl={['0', '0', '4']}>
          <SuggestionSummary
            activeSort={activeSort}
            handleSort={handleSortSuggestions}
          />
          <Box px={{ base: 5, md: 0 }}>
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
    </>
  );
};

export default DashboardLayout;
