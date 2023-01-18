'use client';

// libs
import isEqual from 'react-fast-compare';
import { SimpleGrid } from '@chakra-ui/react';
import { memo } from 'react';

// components
import PostCard from '@components/PostCard';

// types
import { Post } from 'types/index';

type Props = {
  data: Post[];
};

export const BlogList = memo(({ data }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacingX="30px"
      spacingY="120px"
    >
      {data.map((item) => (
        <PostCard key={item.id} data={item} />
      ))}
    </SimpleGrid>
  );
}, isEqual);
