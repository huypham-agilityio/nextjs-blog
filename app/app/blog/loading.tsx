'use client';

import { Box, Spinner } from '@chakra-ui/react';

export default function Indicator() {
  return (
    <Box textAlign="center" pt="20" minH="100vh">
      <Spinner emptyColor="gray.200" color="blue.500" size="md" />
    </Box>
  );
}
