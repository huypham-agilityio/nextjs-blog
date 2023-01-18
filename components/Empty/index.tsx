'use client';

import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Center, Stack, Text } from '@chakra-ui/react';

export const EmptyData = () => {
  return (
    <Center>
      <Stack alignItems="center" my="30px">
        <InfoOutlineIcon fontSize="5xl" />
        <Text fontSize={{ base: 'xl', md: '2xl' }}>No data available!</Text>
      </Stack>
    </Center>
  );
};
