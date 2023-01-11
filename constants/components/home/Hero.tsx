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
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

// constants
import { blurDataUrl } from '@constants/index';
import { customers } from '@constants/mockData';

export const Hero = () => {
  return (
    <Box bg="bg.primary">
      <Container>
        <Box display="flex" justifyContent="space-between" pt="90px">
          <Box width="640px" pl="150px">
            <Heading as="h1" size="3.5xl" w="639px">
              Bringing companies and customers together, anywhere
            </Heading>
            <Text fontSize="lg" w="478px" lineHeight="7" pt="24px">
              An awesome & powefull tools for your business, increase business
              revenue with enterprise-grade links built to acquire and engage
              cutomers.
            </Text>

            <InputGroup w="457px" mt="64px">
              <Input
                placeholder="Enter your email"
                size="lg"
                p="35px"
                bgColor="white"
                borderRadius="12px"
              />
              <InputRightElement w="165px" h="73px">
                <Button variant="secondary" size="xl">
                  Try for Free
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text
              fontSize="sm"
              color="textColors.quaternary"
              pl="10px"
              pt="12px"
            >
              Full access. No credit card required.
            </Text>
          </Box>
          <Box
            border="12px solid #000"
            borderLeftRadius="28px"
            borderRight="none"
            pos="relative"
            w="595px"
            h="483px"
          >
            <Image
              src="/images/hero/dashboard.png"
              alt="dashboard"
              fill={true}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              style={{ borderRadius: 12 }}
              sizes="(min-width: 640px) 640px"
              priority={true}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={150}
          py={100}
        >
          <Text fontWeight={500}>Trusted by 1,000+ customers</Text>
          <HStack spacing="60px">
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
        </Box>
      </Container>
    </Box>
  );
};
