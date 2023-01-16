'use client';

// libs
import { HamburgerIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import {
  Box,
  Button,
  Container,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

// constants
import { ROUTES } from '@constants/routes';
import { menuItems } from '@constants/menuItems';

const DynamicDrawerMenu = dynamic(
  () => import('@components/layouts/DrawerMenu')
);

export const Header = () => {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="bg.primary">
      <Container px={{ md: '60px', lg: '150px' }}>
        <HStack
          as="nav"
          bg="bg.primary"
          justifyContent="space-between"
          py="24px"
        >
          <HStack alignItems="center" spacing={{ base: '40px', lg: '90px' }}>
            <Box minW={106}>
              <Link href={ROUTES.HOME}>
                <Image
                  src="/logo.png"
                  alt="Yoora logo"
                  width={106}
                  height={22}
                />
              </Link>
            </Box>
            <HStack
              spacing={{ md: '24px', lg: '40px' }}
              display={{ base: 'none', md: 'flex' }}
            >
              {menuItems.map(({ path, label }) => (
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
          <HStack spacing="16px" display={{ base: 'none', md: 'flex' }}>
            <Button size="sm">Login</Button>
            <Button size="sm" variant="primary">
              Try for Free
            </Button>
          </HStack>
          <Box display={{ md: 'none' }}>
            <Button aria-label="menu" colorScheme="teal" onClick={onOpen}>
              <HamburgerIcon />
            </Button>
          </Box>
        </HStack>
      </Container>
      {isOpen && <DynamicDrawerMenu isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};
