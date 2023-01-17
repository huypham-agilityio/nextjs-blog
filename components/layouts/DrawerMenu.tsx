'use client';

// libs
import React from 'react';
import Link from 'next/link';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

// constants
import { menuItems } from '@constants/menuItems';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerMenu = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          {menuItems.map(({ path, label }) => (
            <Link key={label} href={path}>
              <Text onClick={onClose} p="2" fontWeight="medium">
                {label}
              </Text>
              <Divider />
            </Link>
          ))}
        </DrawerBody>
        <DrawerFooter>
          <Button size="sm" mr={3}>
            Login
          </Button>
          <Button size="sm" variant="primary">
            Try for Free
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMenu;
