'use client';

import { SimpleGrid } from '@chakra-ui/react';
import PostCard from '@components/blog/PostCard';
import { Post } from 'types/index';

type Props = {
  data: Post[];
};
export const BlogList = ({ data }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 2, md: 3 }} spacingX="30px" spacingY="120px">
      {data.map((item) => (
        <PostCard key={item.id} data={item} />
      ))}
    </SimpleGrid>
  );
};
