import React from 'react';
import { ChakraProvider } from '@components/common/ChakraProvider';

import { Header } from '@components/layouts/Header';
import { Footer } from '@components/layouts/Footer';

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
