'use client';

import { Box, Button, Center, Text } from '@chakra-ui/react';

type Props = {
  error?: Error;
  reset?: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <Center>
      <Box p="10">
        <Text fontSize="xl">Something went wrong!</Text>
        <Text mb="10">Error: {error?.message}</Text>
        <Button onClick={reset}>Try again</Button>
      </Box>
    </Center>
  );
}
