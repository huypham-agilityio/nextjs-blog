'use client';

import { Box, HStack, Select, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

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
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Cookies</Link>
        </HStack>
        <HStack spacing="1.5">
          <Image src="/earth.png" alt="earth icon" width="20px" height="20px" />
          <Select variant="unstyled">
            <option value="en">English</option>
            <option value="vi">Viet Nam</option>
          </Select>
        </HStack>
      </HStack>
    </Box>
  );
};
