'use client';

import { Button, Center, Stack, Text } from '@chakra-ui/react';
import { BlogList } from '@components/blog/BlogList';
import { LIMIT } from '@constants/pagination';
import Link from 'next/link';
import { Post } from 'types/index';

type Props = {
  data?: Post[];
  total?: number;
  params?: {
    page: string;
    slug?: string;
  };
};

export const BlogPage = ({ data, params, total = 0 }: Props) => {
  const { page, slug } = params || {};
  const currentPage = Number(page) || 1;
  const nextPagePath = slug
    ? `/blog/category/${slug}/${currentPage + 1}`
    : `/blog/${currentPage + 1}`;

  return (
    <Center my="10">
      <Stack spacing="40px">
        {!data?.length ? (
          <Text fontSize="3xl" color="textColors.tertiary">
            There are no posts.
          </Text>
        ) : (
          <BlogList data={data} />
        )}

        {total > LIMIT * currentPage && (
          <Stack direction="row" justifyContent="flex-end">
            <Link href={nextPagePath}>
              <Button
                size="sm"
                rightIcon={<span>&rarr;</span>}
                colorScheme="teal"
                variant="outline"
              >
                Next page
              </Button>
            </Link>
          </Stack>
        )}
      </Stack>
    </Center>
  );
};
