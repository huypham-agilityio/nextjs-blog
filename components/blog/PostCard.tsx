'use client';

// libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

// types
import { Post } from 'types/index';

// constants
import { blurDataUrl } from '@constants/index';

type Props = {
  data: Post;
  variant?: 'default' | 'large';
};

const PostCard = ({ variant, data }: Props) => {
  const isLarge = variant === 'large';
  const { author, category, image, publishedTime, title, slug } = data || {};

  return (
    <Box w="100%">
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
        <Box pos="relative" paddingBottom="60%">
          <Image
            style={{ objectFit: 'cover' }}
            src={image?.src}
            alt={image?.alt}
            fill={true}
            sizes="(min-width: 768px) 50vw, (min-width: 1024px) 33vw, 100vw"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </Box>
        <Link href={`/${slug}`} prefetch={false}>
          <Heading
            fontSize={isLarge ? '1.5xl' : 'xl'}
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
