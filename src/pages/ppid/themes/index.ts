import { ChakraTheme, extendTheme } from '@chakra-ui/react'

import Button from './components/Button.ts'
import Heading from './components/Heading.ts'
import Flex from './components/Flex.ts'

import colors from './colors.ts'
import textStyles from './text-style.ts'
import fonts from './fonts.ts'
import layerStyles from './layer-style.ts'

const theme: Partial<ChakraTheme> = {
  fonts,
  colors,
  textStyles,
  layerStyles,

  components: {
    Button,
    Heading,
    Flex
  },
}

export default extendTheme(theme)