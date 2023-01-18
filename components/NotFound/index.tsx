'use client';

// libs
import { SearchIcon } from '@chakra-ui/icons';
import { Center, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

// constants
import { ROUTES } from '@constants/routes';

const NotFound = () => {
  return (
    <Center minH="calc(100vh - 193px)">
      <Stack alignItems="center" my="30px" spacing="8">
        <SearchIcon fontSize="5xl" />
        <Text fontSize={{ base: 'xl', md: '2xl' }}>Page Not Found!</Text>
        <Link href={ROUTES.HOME}>Back to home</Link>
      </Stack>
    </Center>
  );
};

export default NotFound;
