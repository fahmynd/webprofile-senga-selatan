import React from 'react'
import { Text } from '@chakra-ui/react'

const start = { fontVariationSettings: '"TIME" 1' }
const end   = { fontVariationSettings: '"TIME" 100' }

export function DropdownArrow(props: Parameters<typeof Text>[0]) {
  return (
    <Text 
      as="span" 
      fontFamily="anicons" rotate="90deg" 
      transform="auto" children="M"

      transitionProperty="all"
      transitionDuration="slower"
      transitionTimingFunction="ease-out"

      sx={{ '&': start, '[aria-expanded=true] &': end  }}
      _groupHover={end}
      _groupActive={end}
      _expanded={end}
      {...props}
    />
  )
}