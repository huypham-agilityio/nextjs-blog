'use client';

import { Center, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center minH="calc(100vh - 185px)">
      <Spinner emptyColor="gray.200" color="blue.500" size="lg" />
    </Center>
  );
}
