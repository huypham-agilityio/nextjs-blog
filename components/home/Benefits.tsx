'use client';

// libs
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';

// constants
import { benefits } from '@constants/mockData';

// components
import BenefitCard from './BenefitCard';

export const Benefits = () => {
  return (
    <Box bg="bg.secondary">
      <Container py="100px" px={{ md: '60px', lg: '150px' }}>
        <Stack spacing="80px">
          <Stack flexDir={{ base: 'column', md: 'row' }}>
            <Heading
              color="textColors.secondary"
              size={{ base: 'xl', md: '2xl' }}
              maxW="520px"
              mr={{ md: '50px' }}
            >
              Here&apos;s how Yoora can benefit your business
            </Heading>
            <Text color="textColors.secondary" fontSize="lg" maxW={487}>
              Build more meaningful and lasting relationships — better
              understand their needs, identify new opportunities to help,
              address any problems faster.
            </Text>
          </Stack>
          <SimpleGrid
            columns={{ md: 2, lg: 3 }}
            spacing="15px"
            justifyItems="center"
          >
            {benefits.map((item, index) => (
              <BenefitCard key={index} data={item} active={index === 0} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};
