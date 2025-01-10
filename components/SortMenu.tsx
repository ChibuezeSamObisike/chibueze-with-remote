import { Menu, MenuButton, MenuList, MenuItem, Text } from '@chakra-ui/react';
import React from 'react';

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

const SortMenu = ({ handleSort }: { handleSort: (s: string) => void }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Text}
            fontSize={{ base: 'md', lg: 'lg' }}
            fontWeight={600}
            px={4}
            py={2}
            borderRadius='md'
            // bg={{ base: 'gray.700', dark: 'gray.700' }}
            // color={{ base: 'black', dark: 'white' }}
            // _hover={{
            //   bg: { base: 'gray.300', dark: 'gray.600' },
            // }}
            // _active={{
            //   bg: { base: 'gray.400', dark: 'gray.500' },
            // }}
          >
            {isOpen ? 'Close' : 'Sort'}
          </MenuButton>
          <MenuList
            bg={{ base: 'white', dark: 'gray.800' }}
            color={{ base: 'black', dark: 'white' }}
            borderRadius='md'
            shadow='lg'
          >
            {SORT_DETAILS.map((item) => (
              <MenuItem
                key={item.value}
                onClick={() => handleSort(item.value)}
                // _hover={{
                //   bg: { base: 'gray.100', dark: 'gray.700' },
                // }}
                // _focus={{
                //   bg: { base: 'gray.200', dark: 'gray.600' },
                // }}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default SortMenu;
