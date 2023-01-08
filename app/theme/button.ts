export const Button = {
  baseStyle: {
    borderRadius: '4px',
    color: 'white',
    _hover: {
      opacity: 0.8,
    },
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '24px',
    },
  },
  variants: {
    default: {
      border: 'solid 1px #dcdcdc',
      color: '#000',
      bg: 'white',
    },
    primary: {
      bg: 'bg.secondary',
    },
    secondary: {
      bg: 'whatsapp.500',
      color: 'white',
      borderRadius: '8px'
    },
  },
  defaultProps: {
    variant: 'default',
  },
};
