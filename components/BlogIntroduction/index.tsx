'use client';

import { Box, Container, Heading, Text } from '@chakra-ui/react';

export const BlogIntroduction = () => {
  return (
    <Box bg="bg.primary">
      <Container px={{ md: '60px', lg: '150px' }}>
        <Heading
          as="h1"
          size={{ base: '2xl', md: '3.5xl' }}
          maxW="680px"
          py={{ base: '24px', md: '60px' }}
        >
          News and insights{' '}
          <Text color="textColors.tertiary" as="span">
            from our experts
          </Text>
        </Heading>
      </Container>
    </Box>
  );
};
