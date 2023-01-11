'use client';

// libs
import { Box, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

// components
import { Select } from '@components/common/Select';

// constants
import { footerNavLinks, languageOptions } from '@constants/mockData';

export const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="solid 1px"
      borderColor="rgb(120, 120, 120, 0.24)"
    >
      <HStack justifyContent="space-around" py="40px">
        <Text size="sm" color="textColors.quaternary">
          © Copyright 2022 Yoora, Inc.
        </Text>
        <HStack spacing="48px">
          {footerNavLinks.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.label}
            </Link>
          ))}
        </HStack>
        <Select
          options={languageOptions}
          variant="unstyled"
          iconUrl="/earth.png"
        />
      </HStack>
    </Box>
  );
};
