'use client';

import { Box, Container, Heading, Text } from '@chakra-ui/react';

export const BlogIntroduction = () => {
  return (
    <Box bg="bg.primary">
      <Container>
        <Heading as="h1" size="3.5xl" maxW="680px" pl="135px" py="80px">
          News and insights{' '}
          <Text color="textColors.tertiary" as="span">
            from our experts
          </Text>
        </Heading>
      </Container>
    </Box>
  );
};
