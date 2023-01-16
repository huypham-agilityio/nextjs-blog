'use client';

// libs
import { Center, Text } from '@chakra-ui/react';

import React from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Center py="24px">
      <Text fontSize="2xl">Oops! Something went wrong.</Text>
    </Center>
  );
};

export default Error;
