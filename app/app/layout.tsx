import React from 'react';
import { ChakraProvider } from '@components/common/ChakraProvider';

import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
