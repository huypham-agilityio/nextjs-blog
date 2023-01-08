import {
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import PostCard from '@components/blog/PostCard';
import { Post } from 'types/index';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  data: Post[];
};

export const FeaturedPosts = ({ data }: Props) => {
  return (
    <Container>
      <Stack spacing="72px" px="150px" py="120px">
        <HStack justifyContent="space-between">
          <Heading size="3.5xl">What’s new at Yoora?</Heading>
          <Link href="/blog">
            <Center>
              <Text fontSize="xl" mr="3" fontWeight="semibold">
                See all{' '}
              </Text>
              <Image
                src="/images/right-arrow.png"
                alt="arrow icon"
                width={10}
                height={18}
              />
            </Center>
          </Link>
        </HStack>
        <HStack spacing="7">
          {data.map((post) => (
            <PostCard key={post.id} variant="large" data={post} />
          ))}
        </HStack>
      </Stack>
    </Container>
  );
};
