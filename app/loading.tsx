'use client';

// libs
import { Center, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center py="24px">
      <Spinner size="lg" />
    </Center>
  );
}
