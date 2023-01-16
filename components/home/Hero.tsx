'use client';

// libs
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

// constants
import { blurDataUrl } from '@constants/index';
import { customers } from '@constants/mockData';

export const Hero = () => {
  return (
    <Box bg="bg.primary">
      <Container
        pl={{ base: '24px', md: '60px', lg: '150px' }}
        pr={{ base: '24px', lg: '0' }}
      >
        <Stack pt={{ md: '60px' }}>
          <Stack flexDir={{ base: 'column', lg: 'row' }}>
            <Box mr={{ lg: '40px', xl: '80px' }} w={{ lg: '50%' }}>
              <Heading
                as="h2"
                size={{ base: '2xl', md: '3.5xl' }}
                mb={{ base: '16px', md: '24px' }}
              >
                Bringing companies and customers together, anywhere
              </Heading>
              <Text fontSize={{ md: 'lg' }} lineHeight="7" pt="16px">
                An awesome & powefull tools for your business, increase business
                revenue with enterprise-grade links built to acquire and engage
                cutomers.
              </Text>

              <InputGroup maxW="450px" mt="24px">
                <Input
                  placeholder="Enter your email"
                  size="lg"
                  p="35px"
                  bgColor="white"
                  borderRadius="12px"
                />
                <InputRightElement w={{ base: '165px' }} h="73px">
                  <Button variant="secondary" size="xl">
                    Try for Free
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Text fontSize="sm" color="textColors.quaternary" pt="10px">
                Full access. No credit card required.
              </Text>
            </Box>

            <Box
              border="solid"
              borderWidth={{ base: '8px', lg: '12px' }}
              borderLeftRadius="25px"
              borderRight="none"
              w={{ lg: '50%' }}
              h="100%"
              mt="10px"
              pos="relative"
              paddingBottom={{ base: '80%', lg: '40%' }}
            >
              <Image
                priority={true}
                src="/images/hero/dashboard.png"
                alt="dashboard"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                fill={true}
                sizes="100vw"
                style={{
                  borderRadius: '20px 0 0 20px',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Stack>
        </Stack>

        <Stack
          flexDir={{ base: 'column', md: 'row' }}
          py={{ base: '24px', md: '40px' }}
        >
          <Text fontWeight={500} my="30px" mr={{ md: '100px' }}>
            Trusted by 1,000+ customers
          </Text>
          <HStack gap={{ base: '5', md: '10' }} flexWrap="wrap">
            {customers.map((image, index) => (
              <Image
                key={index}
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
              />
            ))}
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};
