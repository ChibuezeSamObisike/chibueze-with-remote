'use client';
import UpVoteBadge from '@/components/UpVoteBadge';
import { Badge, Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface SuggestionsCardProps {
  title: string;
  description: string;
  tag: string;
  upvotes: number;
  comments: number;
}

const SuggestionsCard: React.FC<SuggestionsCardProps> = ({
  title,
  description,
  tag,
  upvotes,
  comments,
}) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      flexDirection={['column', 'row']}
      justifyContent='space-between'
      px={5}
      py={10}
      bgColor='#fff'
      borderRadius='10px'
      my={10}
      _hover={{
        bgColor: '#fff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      }}
      transition='all 0.3s ease'
    >
      <Box display='flex' alignItems='flex-start'>
        <UpVoteBadge upvotes={upvotes} />
        <Box ml={10}>
          <Text _hover={{ color: '#4661E6' }} textStyle='h3'>
            {title}
          </Text>
          <Text textStyle='body1'>{description}</Text>
          <Box display='flex' mt={2} alignItems='center'>
            <Badge variant='solid'>{tag}</Badge>
            <Flex
              display={{ base: 'flex', md: 'none' }}
              ml={2}
              alignItems='center'
            >
              <Image
                src='/comment-icon.svg'
                height='20'
                width='22'
                alt='comment icon'
              />
              <Text ml={2} fontWeight={700} color='#3A4374'>
                {comments}
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Flex display={{ base: 'none', md: 'flex' }} align='center'>
        <Image
          src='/comment-icon.svg'
          height='20'
          width='22'
          alt='comment icon'
        />
        <Text ml={2} fontWeight={700} color='#3A4374'>
          {comments}
        </Text>
      </Flex>
    </Box>
  );
};

export default SuggestionsCard;
