import { extendTheme } from '@chakra-ui/react';
import localFont from '@next/font/local';
import { Button } from './button';
import { typography } from './typography';
import { Heading } from './heading';
import { Container } from './container';
import { colors } from './colors';
import { breakpoints } from './breakpoints';

const satoshi = localFont({
  src: '../public/fonts/Satoshi.ttf',
  weight: '400 700',
});

const theme = extendTheme({
  components: {
    Button,
    Heading,
    Container,
  },
  fonts: {
    heading: satoshi.style.fontFamily,
    body: satoshi.style.fontFamily,
  },
  colors,
  ...typography,
  breakpoints,
});

export default theme;
