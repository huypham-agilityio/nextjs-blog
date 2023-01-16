'use client';

// libs
import { Heading, Box, Text, Divider, Stack } from '@chakra-ui/react';
import Image from 'next/image';

// constants
import { blurDataUrl } from '@constants/index';

// types
import { Post } from 'types/index';

type Props = { data: Post };

export const PostDetail = ({ data }: Props) => {
  const { author, category, image, publishedTime, title, content } = data || {};

  return (
    <>
      <Stack
        alignItems="center"
        pt="70px"
        bg="bg.primary"
        px={{ base: '24px', md: '60px' }}
      >
        <Box maxW="945px" w="100%" m="auto">
          <Stack maxW="750px" m="auto" mb="30px">
            <Text
              fontSize="sm"
              textTransform="uppercase"
              fontWeight="bold"
              color="textColors.tertiary"
              mb="5px"
            >
              {category}
            </Text>
            <Divider borderColor="textColors.tertiary" />
            <Heading size={{ base: 'xl', md: '2xl' }} pt="20px">
              {title}
            </Heading>
            <Text fontWeight="semibold" pt="24px">
              {publishedTime},{' '}
              <Text as="span" color="textColors.tertiary">
                by {author}
              </Text>
            </Text>
          </Stack>
          <Box w="100%" pos="relative" paddingBottom="66%">
            <Image
              src={image?.src}
              alt={image?.alt}
              fill={true}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </Box>
        </Box>
      </Stack>

      <Stack alignItems="center" my="30px" px="24px">
        <Stack maxW="750px" alignItems="center">
          <Text fontSize="lg" fontWeight="semibold" lineHeight={1.8}>
            {content}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};
