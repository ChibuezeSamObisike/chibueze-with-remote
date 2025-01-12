import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Image from 'next/image';

const SORT_DETAILS = [
  {
    label: 'Most Upvotes',
    value: 'upvotes',
  },
  {
    label: 'Least Upvotes',
    value: 'downvotes',
  },
  {
    label: 'Most Comments',
    value: 'comments',
  },
  {
    label: 'Least Comments',
    value: 'least_comments',
  },
];

const CustomSortDropdown = ({
  handleSort,
  activeSort,
}: {
  handleSort: (s: string) => void;
  activeSort?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    handleSort(value);
    setIsOpen(false);
  };

  const activeLabel =
    SORT_DETAILS.find((item) => item.value === activeSort)?.label || 'Upvotes';

  return (
    <Box position='relative' display='inline-block'>
      <Box
        px={4}
        py={2}
        fontSize={{ base: 'md', lg: 'lg' }}
        fontWeight={600}
        borderRadius='md'
        color='white'
        cursor='pointer'
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <Box display='flex' alignItems='center' gap={2}>
          <b>{activeLabel}</b>
          <Image
            src={isOpen ? '/up-arrow.svg' : '/down-arrow.svg'}
            alt={isOpen ? 'Collapse dropdown' : 'Expand dropdown'}
            width={12}
            height={8}
          />
        </Box>
      </Box>

      {isOpen && (
        <Stack
          position='absolute'
          top='100%'
          left='0'
          mt={{ md: 2 }}
          bg='#fff'
          color='#647196'
          boxShadow='0px 10px 40px -7px #373F6859'
          borderRadius='md'
          zIndex={10}
          spacing={0}
          width='255px'
        >
          {SORT_DETAILS.map((item, i, arr) => (
            <Box
              key={item.value}
              px={4}
              py={2}
              fontSize='md'
              fontWeight={500}
              cursor='pointer'
              _hover={{ bg: 'gray.50', color: '#AD1FEA' }}
              onClick={() => handleOptionClick(item.value)}
              borderBottom={arr.length - 1 !== i ? '1px solid #e2e3eb' : ''}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              {item.label}
              {activeSort === item.value && (
                <Image
                  src='/tick-active.svg'
                  width='11'
                  height='7'
                  alt='Selected option'
                />
              )}
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default CustomSortDropdown;
