'use client';

// libs
import {
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

// components
import PostCard from '@components/blog/PostCard';

// constants
import { ROUTES } from '@constants/routes';

// types
import { Post } from 'types/index';

type Props = {
  data: Post[];
};

export const FeaturedPosts = ({ data }: Props) => {
  return (
    <Container>
      <Stack spacing="72px" px={{ md: '60px', lg: '150px' }} py="80px">
        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Heading size={{ base: 'xl', md: '2xl' }}>
            What’s new at Yoora?
          </Heading>
          <Link href={ROUTES.BLOG}>
            <HStack>
              <Text fontSize="lg" mr="3" fontWeight="semibold">
                See all{' '}
              </Text>
              <Image
                src="/images/right-arrow.png"
                alt="arrow icon"
                width={10}
                height={18}
              />
            </HStack>
          </Link>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {data.map((post) => (
            <PostCard key={post.id} variant="large" data={post} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};
