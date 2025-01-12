import UpVoteBadge from '@/components/UpVoteBadge';
import { Badge, Box, Flex, Text, StyleProps } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface SuggestionsCardProps {
  title: string;
  description: string;
  tag: string;
  upvotes: number;
  comments: number;
}

const Comments = ({ comments, sx }: { comments: number; sx?: StyleProps }) => {
  return (
    <Flex sx={sx} alignItems='center'>
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
  );
};

const DesktopView: React.FC<SuggestionsCardProps> = ({
  title,
  description,
  tag,
  upvotes,
  comments,
}) => (
  <Box
    display='flex'
    alignItems='center'
    width='100%'
    justifyContent='space-between'
    px={3}
  >
    <UpVoteBadge upvotes={upvotes} />
    <Box ml={10} width='100%'>
      <Text _hover={{ color: '#4661E6' }} textStyle='h3'>
        {title}
      </Text>
      <Text textStyle='body1'>{description}</Text>
      <Box width='100%' display='flex' mt={2} alignItems='center'>
        <Badge variant='solid'>{tag}</Badge>
      </Box>
    </Box>
    <Comments sx={{ display: 'flex' }} comments={comments} />
  </Box>
);

const TabletView: React.FC<SuggestionsCardProps> = ({
  title,
  description,
  tag,
  upvotes,
  comments,
}) => (
  <Box
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    flexDirection='row'
  >
    <Box display='flex'>
      <UpVoteBadge upvotes={upvotes} />
      <Box ml={6}>
        <Text _hover={{ color: '#4661E6' }} textStyle='h3'>
          {title}
        </Text>
        <Text textStyle='body1'>{description}</Text>
        <Box display='flex' mt={2} alignItems='center' gap={4}>
          <Badge variant='solid'>{tag}</Badge>
        </Box>
      </Box>
    </Box>
    <Comments comments={comments} />
  </Box>
);

const MobileView: React.FC<SuggestionsCardProps> = ({
  title,
  description,
  tag,
  upvotes,
  comments,
}) => (
  <Box>
    <Box display='flex' alignItems='flex-start'>
      <Box>
        <Text _hover={{ color: '#4661E6' }} textStyle='h3'>
          {title}
        </Text>
        <Text textStyle='body1'>{description}</Text>
        <Badge variant='solid' mt={2}>
          {tag}
        </Badge>
      </Box>
    </Box>
    <Box
      mt={18}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <UpVoteBadge direction='row' sx={{ px: 3, py: 2 }} upvotes={upvotes} />
      <Comments comments={comments} />
    </Box>
  </Box>
);

const SuggestionsCard: React.FC<SuggestionsCardProps> = (props) => {
  return (
    <Box
      display='flex'
      flexDirection={{ base: 'column', md: 'row' }}
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
      <Box width='100%' display={{ base: 'block', sm: 'none' }}>
        <MobileView {...props} />
      </Box>
      <Box width='100%' display={{ base: 'none', md: 'block', lg: 'none' }}>
        <TabletView {...props} />
      </Box>
      <Box width='100%' display={{ base: 'none', lg: 'block' }}>
        <DesktopView {...props} />
      </Box>
    </Box>
  );
};

export default SuggestionsCard;
