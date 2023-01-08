'use client';

import { ChakraProvider as Provider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from '@theme/index';

export const ChakraProvider = ({ children }: { children: ReactNode }) => (
  <Provider theme={theme}>
    {children}
  </Provider>
);
