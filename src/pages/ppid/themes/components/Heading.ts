import type { StyleConfig } from "@chakra-ui/theme-tools";
import textStyles from './../text-style'

const Heading: StyleConfig = {
  baseStyle: {
    fontWeight: 'semibold'
  },
  variants: {
    'hero-title': {
      fontWeight: ['black'],
      fontSize: ['2xl', '3xl', '4xl'],
      textAlign: 'center'
    },
    'hero-subtitle': {
      fontWeight: ['medium', 'medium'],
      fontSize: ['lg', 'xl', '2xl'],
      textAlign: 'center'
    },
    'section-title': {
      fontWeight: 'bold',
      fontSize: ['2xl', '3xl', '3xl'],
      textAlign: 'center'
    },
    'section-subtitle': {
      fontSize: ['md', 'xl', 'xl'],
      textAlign: 'center',
      fontWeight: 'medium'
    },
    'card-title': {
      fontWeight: 'bold',
      fontSize: 'xl'
    },
    'list-title': {
      fontWeight: 'extrabold',
      fontSize: 'lg'
    }
  }
}

export default Heading