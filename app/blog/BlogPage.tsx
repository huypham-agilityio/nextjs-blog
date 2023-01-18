'use client';
// libs
import { Box, Button, Container, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

// components
import { BlogList } from '@components/BlogList';

// constants
import { LIMIT } from '@constants/pagination';

// types
import { Post } from 'types/index';

type Props = {
  data: Post[];
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
    <Box my="10">
      <Container px={{ md: '60px', lg: '150px' }}>
        {!data?.length ? (
          <Text fontSize="3xl" color="textColors.tertiary">
            There are no posts.
          </Text>
        ) : (
          <BlogList data={data} />
        )}

        {total > LIMIT * currentPage && (
          <Stack direction="row" justifyContent="flex-end" mt="24px">
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
      </Container>
    </Box>
  );
};
