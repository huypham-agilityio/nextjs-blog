import {
  Box,
  Center,
  Container,
  Heading,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { integrations } from '@constants/mockData';
import { ImageType } from 'types/index';
import Image from 'next/image';
import Link from 'next/link';

type AppIcon = {
  width?: string;
  height?: string;
  image: ImageType;
};

const AppIntegrationItem = ({ data }: { data: AppIcon }) => {
  const { width = '120px', height = '120px', image } = data;

  return (
    <Link href="#">
      <Center
        w={width}
        h={height}
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
    <Box bg="bg.primary">
      <Container>
        <Stack px="135px" py="120px" textAlign="center" spacing="72px">
          <Stack spacing="24px">
            <Heading size="2xl">Over 300+ integrations</Heading>
            <Text color="#3B3A40" fontSize="lg">
              Expand the capabilities of Yoora with hundreds of apps and
              integrations
            </Text>
          </Stack>
          <Wrap>
            {integrations.map((item, index) => (
              <WrapItem key={index}>
                <AppIntegrationItem data={item} />
              </WrapItem>
            ))}
          </Wrap>
          <Link href="#">
            <Center>
              <Text fontSize="2xl" mr="3" fontWeight="semibold">
                See all apps and extensions{' '}
              </Text>
              <Image
                src="/images/right-arrow.png"
                alt="arrow icon"
                width={11}
                height={19}
              />
            </Center>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};
