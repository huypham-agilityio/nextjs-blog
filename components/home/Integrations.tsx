'use client';

// libs
import { Center, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

// constants
import { integrations } from '@constants/mockData';

// types
import { ImageType } from 'types/index';

type AppIcon = {
  image: ImageType;
};

const AppIntegrationItem = ({ image }: AppIcon) => {
  return (
    <Link href="#">
      <Center
        px="5"
        h="78"
        bg="bg.tertiary"
        borderRadius="12px"
        _hover={{ opacity: '0.8' }}
      >
        <Image
          src={image?.src}
          alt={image?.alt}
          width={image?.width}
          height={image?.height}
        />
      </Center>
    </Link>
  );
};

export const Integrations = () => {
  return (
    <Center bg="bg.primary">
      <Stack
        px={{ md: '60px' }}
        py="80px"
        textAlign="center"
        spacing={{ base: '32px', md: '60px' }}
      >
        <Stack spacing="24px">
          <Heading size={{ base: 'xl', md: '2xl' }}>
            Over 300+ integrations
          </Heading>
          <Text color="#3B3A40" fontSize={{ md: 'lg' }}>
            Expand the capabilities of Yoora with hundreds of apps and
            integrations
          </Text>
        </Stack>
        <Wrap justify="center" maxW={900}>
          {integrations.map((item, index) => (
            <WrapItem key={index}>
              <AppIntegrationItem image={item} />
            </WrapItem>
          ))}
        </Wrap>
        <Link href="#">
          <Center>
            <Text mr="2" fontWeight="semibold" fontSize={{ md: 'xl' }}>
              See all apps and extensions{' '}
            </Text>
            <Image
              src="/images/right-arrow.png"
              alt="arrow icon"
              width={8}
              height={19}
            />
          </Center>
        </Link>
      </Stack>
    </Center>
  );
};
