'use client';

import { Box, Button, Container, HStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

const navItems = [
  { path: '/product', label: 'Product' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/company', label: 'Company' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export const Header = () => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <Box bg="bg.primary">
      <Container>
        <HStack
          as="nav"
          bg="bg.primary"
          justifyContent="space-between"
          px="150px"
          py="24px"
        >
          <HStack alignItems="center" spacing="90px">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={106} height={22} />
            </Link>
            <HStack spacing="40px">
              {navItems.map(({ path, label }) => (
                <Link key={label} href={path}>
                  <Text
                    fontWeight="medium"
                    borderBottom={
                      selectedLayoutSegments === path.split('/')[1]
                        ? 'solid'
                        : ''
                    }
                    _hover={{ borderBottom: 'solid' }}
                  >
                    {label}
                  </Text>
                </Link>
              ))}
            </HStack>
          </HStack>
          <HStack spacing="16px">
            <Button size="sm">Login</Button>
            <Button size="sm" variant="primary">
              Try for Free
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
