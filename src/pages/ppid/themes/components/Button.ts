import type { CSSObject } from '@chakra-ui/styled-system';
import type { StyleConfig } from '@chakra-ui/theme-tools';

const variants: Record<string, CSSObject> = {}
variants['outline'] = {
  border: '2px solid',
  borderColor: 'gray.800',
  _hover: {
    bgColor: 'gray.800',
    color: 'white'
  },
  _pressed: { bgColor: 'gray.900' },
  _active: { bgColor: 'gray.900' },
}

variants['filled'] = {
  bgColor: 'gray.700',
  color: 'white',
  _pressed: { bgColor: 'gray.900' },
  _active: { bgColor: 'gray.900' },
}

const Button: StyleConfig = {
  baseStyle: {
    textDecorationLine: 'none !important',
  },
  variants
}

export default Button