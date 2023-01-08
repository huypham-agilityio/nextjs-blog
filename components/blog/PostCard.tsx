'use client';

import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import { Post } from 'types/index';
import Image from 'next/image';
import Link from 'next/link';
import { blurDataUrl } from '@constants/index';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

type Props = {
  data: Post;
  variant?: 'default' | 'large';
};

const PostCard = ({ variant, data }: Props) => {
  const isLarge = variant === 'large';
  const { author, category, image, publishedTime, title, slug } = data || {};

  return (
    <Box w={isLarge ? '555px' : '361px'}>
      <Box mb="6">
        <Text
          fontSize="sm"
          textTransform="uppercase"
          fontWeight="bold"
          color="textColors.tertiary"
        >
          {category}
        </Text>
        <Divider mt="14px" borderColor="textColors.tertiary" />
      </Box>

      <Stack spacing="6">
        <Box pos="relative" w="100%" h={isLarge ? '370px' : '241px'}>
          <Image
            style={{ objectFit: 'cover' }}
            src={image?.src}
            alt={image?.alt}
            fill={true}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            // sizes="(min-width: 1200px) 50px"
          />
        </Box>
        <Link href={`/${slug}`} prefetch={false}>
          <Heading
            fontSize={isLarge ? '3xl' : '2xl'}
            _hover={{ opacity: '0.8' }}
          >
            {title}
          </Heading>
        </Link>
        <Text fontWeight="semibold">
          {publishedTime},{' '}
          <Text as="span" color="textColors.tertiary">
            by {author}
          </Text>
        </Text>
      </Stack>
    </Box>
  );
};

export default memo(PostCard, isEqual);
